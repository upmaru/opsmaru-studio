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
