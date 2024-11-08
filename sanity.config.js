import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'Opsmaru',

  projectId: 'gyrrgtvc',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
