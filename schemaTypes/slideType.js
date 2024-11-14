import {defineField, defineType} from 'sanity'

export const slide = defineType({
  type: 'document',
  name: 'slide',
  title: 'Slide',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image of the slide',
      validation: (e) => e.required(),
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
      description: 'The title of the slide',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'The index of the slide',
      validation: (e) => e.required(),
    })
  ]
})