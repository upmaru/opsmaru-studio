import {defineField, defineType} from 'sanity'

export const movie = defineType({
  type: 'document',
  name: 'movie',
  title: 'Movie',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the movie',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Slug of the movie',
      validation: (e) => e.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      description: 'Video of the movie',
      type: 'mux.video',
      validation: (e) => e.required(),
    })
  ]
})