import {defineField, defineType} from 'sanity'

export const featureCategory = defineType({
  type: 'document',
  name: 'featureCategory',
  title: 'Feature Category',
  fields: [
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'The order in which the category should appear',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      description: "Name of the category, e.g. 'Performance' or 'Security'",
      validation: (e) => e.required(),
    }),
  ],
})

export const feature = defineType({
  type: 'document',
  name: 'feature',
  title: 'Feature',
  fields: [
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      to: [{type: 'featureCategory'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'Describe the benefits of the feature',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'help',
      title: 'Help',
      description: 'Help text for the feature',
    }),
  ],
})
