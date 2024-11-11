import {defineField, defineType} from 'sanity'

export const person = defineType({
  type: 'document',
  name: 'person',
  title: 'Person',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'image',
      name: 'avatar',
      title: 'Avatar',
      description: 'The avatar of the person',
      validation: (e) => e.required(),
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
  ],
})
