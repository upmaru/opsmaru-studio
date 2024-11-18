import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  type: 'document',
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover',
      description: 'The cover image of the testimonial',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'The name of the customer',
      validation: (e) => e.required()
    }),
    defineField({
      type: 'text',
      name: 'quote',
      title: 'Quote',
      description: 'The quote of the testimonial',
      validation: (e) => e.required()
    }),
    defineField({
      type: 'string',
      name: 'position',
      title: 'Position',
      description: 'The position of the customer',
      validation: (e) => e.required()
    })
  ]
})