import {defineField, defineType} from 'sanity'

export const post = defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the post',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'markdown',
      name: 'content',
      title: 'Content',
      description: 'The markdown content',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Url friendly name',
      validation: (e) => e.required(),
      options: {
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
