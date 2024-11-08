import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  type: 'document',
  name: 'navigation',
  title: 'Navigation',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the nav bar',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Slug of the nav bar',
      validation: (e) => e.required(),
    }),
  ],
})

export const link = defineType({
  type: 'document',
  name: 'link',
  title: 'Link',
  fields: [
    defineField({
      type: 'reference',
      name: 'navigation',
      title: 'Navigation',
      to: [{type: 'navigation'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the link',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'path',
      title: 'Path',
      description: 'Href of the link',
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'Order of the link',
      validation: (e) => e.required(),
    }),
  ],
})
