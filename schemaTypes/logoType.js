import {defineField, defineType} from 'sanity'

export const logo = defineType({
  type: 'document',
  name: 'logo',
  title: 'Logo',
  fields: [
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'Logo image',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'Name of the logo',
      validation: (e) => e.required(),
    })
  ]
})