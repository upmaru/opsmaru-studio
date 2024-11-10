import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/slugIsUnique'

export const post = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the post',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'featured',
      title: 'Featured',
      description: 'Is this a featured post?',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'blurb',
      title: 'Blurb',
      description: 'Blurb of the post',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'file',
      name: 'content',
      title: 'Content',
      description: 'The markdown content of the post',
      accept: 'text/markdown',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Url friendly name',
      validation: (e) => e.required(),
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      type: 'date',
      name: 'published_at',
      title: 'Published At',
      description: 'Date post is published',
    }),
  ],
})
