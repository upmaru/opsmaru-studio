import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {markdownSchema} from 'sanity-plugin-markdown'
import {muxInput} from 'sanity-plugin-mux-input'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'

const duplicatableTypes = [
  'navigation',
  'page', 
  'pageSection', 
  'pageFaq', 
  'pageContent', 
  'pageCard',
  'card', 
  'post', 
  'product',
  'course',
  'courseSection',
  'courseChapter',
  'courseEpisode',
  'productFeature',
  'postCategory',
  'person',
  'technology',
  'testimonial',
  'feature',
  'featureCategory'
]

export default defineConfig([{
  name: 'Live',
  title: 'Live',
  projectId: 'gyrrgtvc',
  dataset: 'production',
  basePath: '/live',

  document: {
    productionUrl: async (prev, context) => {
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2023-05-31'})

      if (document._type === 'post') { 
        const slug = await client.fetch(
          `*[_type == 'post' && _id == $post_id][0].slug.current`,
          {post_id: document._id}
        )

        return `https://preview.opsmaru.com/blog/${slug}`
      }

      if (document._type === 'course') {
        const slug = await client.fetch(
          `*[_type == 'course' && _id == $course_id][0].slug.current`,
          {course_id: document._id}
        )

        return `https://preview.opsmaru.com/how-to/${slug}`
      }

      if (document._type === 'courseEpisode') {
        const episode = await client.fetch(
          `*[_type == 'courseEpisode' && _id == $episode_id][0] { 
            ...,
            chapter -> {..., course -> {...}}
          }`,
          {episode_id: document._id}
        )

        return `https://preview.opsmaru.com/how-to/${episode.chapter.course.slug.current}/${episode.slug.current}`
      }

      return prev
    }
  },
  plugins: [
    structureTool(), 
    visionTool(), 
    media(), 
    markdownSchema(), 
    muxInput(),
    crossDatasetDuplicator({
      types: duplicatableTypes,
      tool: true
    })
  ],

  schema: {
    types: schemaTypes,
  },
}, {
  name: 'Sandbox',
  title: 'Sandbox',
  projectId: 'gyrrgtvc',
  dataset: 'staging',
  basePath: '/sandbox',

  plugins: [
    structureTool(), 
    visionTool(), 
    media(), 
    markdownSchema(), 
    muxInput(),
    crossDatasetDuplicator({
      types: duplicatableTypes,
      tool: true
    })
  ],

  schema: {
    types: schemaTypes,
  },
}])
