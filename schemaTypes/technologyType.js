import {defineField, defineType} from 'sanity'

export const technologyCategory = defineType({
  type: 'document',
  name: 'technologyCategory',
  title: 'Technology Category',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'The title of the category',
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
    }),
  ],
})

export const technology = defineType({
  type: 'document',
  name: 'technology',
  title: 'Technology',
  fields: [
    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
      description: 'The logo image of the tech',
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
      description: 'The title of the tech',
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
      type: 'file',
      name: 'content',
      title: 'Content',
      description: 'The markdown content of the episode',
      accept: 'text/markdown'
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      description: 'Category of the tech',
      to: [{type: 'technologyCategory'}],
      validation: (e) => e.required(),
    })
  ],
})