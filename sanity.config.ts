import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Barnyard CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string || 'defaultProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string || 'production',
  
  basePath: '/studio',
  
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
