import {defineField, defineType} from 'sanity'

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
      type: 'string',
      name: 'type',
      title: 'Tech Type',
      validation: (e) => e.required(),
      options: {
        list: [
          {title: 'Language', value: 'language'},
          {title: 'Framework', value: 'framework'},
          {title: 'Database', value: 'database'},
          {title: 'Cloud', value: 'cloud'},
          {title: 'Object Storage', value: 'object-storage'},
          {title: 'Hypervisor', value: 'hypervisor'},
          {title: 'Infrastructure as Code', value: 'infrastructure-as-code'},
        ],
      },
    }),
  ],
})