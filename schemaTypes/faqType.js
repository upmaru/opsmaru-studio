import {defineField, defineType} from 'sanity'

export const faq = defineType({
  type: 'document',
  name: 'faq',
  title: 'FAQ',
  fields: [
    defineField({
      type: 'string',
      name: 'question',
      title: 'Question',
      description: 'The question.',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'markdown',
      name: 'answer',
      title: 'Answer',
      description: 'The answer.',
      validation: (e) => e.required(),
    }),
  ],
})
