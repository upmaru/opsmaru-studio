import {defineField, defineType} from 'sanity'

export const product = defineType({
  type: 'document',
  name: 'product',
  title: 'Product',
  fields: [
    defineField({
      type: 'number',
      name: 'index',
      title: 'Index',
      description: 'Order of the product',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'reference',
      title: 'Reference',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (e) => e.required(),
    }),
  ],
})

export const productFeature = defineType({
  type: 'document',
  name: 'productFeature',
  title: 'Product Feature',
  fields: [
    defineField({
      type: 'reference',
      name: 'product',
      title: 'Product',
      to: [{type: 'product'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'reference',
      name: 'feature',
      title: 'Feature',
      to: [{type: 'feature'}],
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'active',
      title: 'Active',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'remark',
      title: 'Remark',
    }),
  ],
  preview: {
    select: {
      feature: 'feature.description',
      product: 'product.name',
    },
    prepare(selection) {
      const {feature, product} = selection
      return {
        title: feature,
        subtitle: `Product: ${product ? product : 'unknown'}`,
      }
    },
  },
})
