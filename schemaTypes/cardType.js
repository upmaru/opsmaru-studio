import {defineField, defineType} from 'sanity'

export const card = defineType({
  type: 'document',
  name: 'card',
  title: 'Card',
  fields: [
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover',
      description: 'The cover image of the card',
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
      name: 'hook',
      title: 'Hook',
      description: 'The phx-hook of the card',
      options: {
        list: [{title: 'Broadcast', value: 'MountBroadcast'}],
      },
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
      type: 'string',
      name: 'heading',
      title: 'Heading',
      description: 'The heading of the card',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the card',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'The description of the card',
      validation: (e) => e.required(),
    }),
  ],
})
