import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/slugIsUnique'

export const page = defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the page',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Url friendly name',
      validation: (e) => e.required(),
      options: {
        isUnique: isUniqueAcrossAllDocuments,
      },
    }),
  ],
})

export const pageSection = defineType({
  type: 'document',
  name: 'pageSection',
  title: 'Page Section',
  fields: [
    defineField({
      type: 'reference',
      name: 'page',
      title: 'Page',
      to: [{type: 'page'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Title of the section',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'Slug of the section',
      validation: (e) => e.required(),
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
  ],
})

export const pageContent = defineType({
  type: 'document',
  name: 'pageContent',
  title: 'Page Content',
  fields: [
    defineField({
      type: 'reference',
      name: 'pageSection',
      title: 'Page Section',
      to: [{type: 'pageSection'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'slug',
      title: 'Slug',
      description: 'Slug of the content',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      description: 'The body of the content',
    }),
  ],
})

export const pageFaq = defineType({
  type: 'document',
  name: 'pageFaq',
  title: 'Page FAQ',
  fields: [
    defineField({
      type: 'reference',
      name: 'page',
      title: 'Page',
      to: [{type: 'page'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'faq',
      title: 'FAQ',
      to: [{type: 'faq'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      validation: (e) => e.required(),
    }),
  ],
  preview: {
    select: {
      faq: 'faq.question',
      page: 'page.title',
    },
    prepare(selection) {
      const {faq, page} = selection
      return {
        title: faq,
        subtitle: `Page: ${page ? page : 'unknown'}`,
      }
    },
  },
})

export const pageCard = defineType({
  type: 'document',
  name: 'pageCard',
  title: 'Page Card',
  fields: [
    defineField({
      type: 'reference',
      name: 'pageSection',
      title: 'Page Section',
      to: [{type: 'pageSection'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'card',
      title: 'Card',
      to: [{type: 'card'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'position',
      title: 'Position',
      description: 'Position of the card',
      validation: (e) => e.required(),
      options: {
        list: [
          {title: 'Top Left', value: 'top-left'},
          {title: 'Top Center', value: 'top-center'},
          {title: 'Top Right', value: 'top-right'},
          {title: 'Bottom Left', value: 'bottom-left'},
          {title: 'Bottom Center', value: 'bottom-center'},
          {title: 'Bottom Right', value: 'bottom-right'}
        ],
      },
    })
  ],
  preview: {
    select: {
      section: 'pageSection.title',
      card: 'card.title',
    },
    prepare(selection) {
      const {section, card} = selection
      return {
        title: card,
        subtitle: `Section: ${section ? section : 'unknown'}`,
      }
    },
  },
})
