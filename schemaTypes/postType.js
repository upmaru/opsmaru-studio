import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/slugIsUnique'

export const postCategory = defineType({
  type: 'document',
  name: 'postCategory',
  title: 'Post Category',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: "Name of the category, e.g. 'Performance' or 'Security'",
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Url friendly name',
      validation: (e) => e.required(),
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    })
  ]
})

export const post = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover',
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
      type: 'array',
      name: 'categories',
      title: 'Categories',
      of: [{ type: 'reference', to: { type: 'postCategory' } }],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'author',
      title: 'Author',
      description: 'Author of the post',
      to: [{type: 'person'}],
      validation: (e) => e.required(),
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
