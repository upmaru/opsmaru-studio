import {defineField, defineType} from 'sanity'

export const courseCategory = defineType({
  type: 'document',
  name: 'courseCategory',
  title: 'Course Category',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'Name of the category',
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
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'The index of the category',
      validation: (e) => e.required(),
    })
  ]
})

export const course = defineType({
  type: 'document',
  name: 'course',
  title: 'Course',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the course',
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
      type: 'image',
      name: 'cover',
      title: 'Cover',
      description: 'Cover image of the course',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'Description of the course',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'file',
      name: 'overview',
      title: 'Overview',
      description: 'The markdown overview of the course',
      accept: 'text/markdown',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'main_technology',
      title: 'Main Technology',
      description: 'Main technology of the course',
      to: [{type: 'technology'}],
    }),
    defineField({
      type: 'array',
      name: 'technologies',
      title: 'Technologies',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      description: 'Category of the course',
      to: [{type: 'courseCategory'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'Episode number',
      validation: (e) => e.required(),
    })
  ]
})

export const courseChapter = defineType({
  type: 'document',
  name: 'courseChapter',
  title: 'Course Chapter',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'Name of the chapter',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'Chapter number',
      validation: (e) => e.required(),
    })
  ]
})

export const courseEpisode = defineType({
  type: 'document',
  name: 'courseEpisode',
  title: 'Course Episode',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the episode',
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
      type: 'reference',
      name: 'author',
      title: 'Author',
      description: 'Author of the episode',
      to: [{type: 'person'}],
      validation: (e) => e.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      description: 'Video of the episode',
      type: 'mux.video',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'chapter',
      title: 'Chapter',
      description: 'Chapter of the episode',
      to: [{type: 'courseChapter'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'file',
      name: 'content',
      title: 'Content',
      description: 'The markdown content of the episode',
      accept: 'text/markdown',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'Episode number',
      validation: (e) => e.required(),
    })
  ]
})
