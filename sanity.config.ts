import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Barnyard CMS',
  
  projectId: '01qv31nl',
  dataset: 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.listItem()
              .title('Navigation')
              .id('navigation')
              .child(
                S.document()
                  .schemaType('navigation')
                  .documentId('navigation')
              ),
            S.listItem()
              .title('Contact Info & Settings')
              .id('contactInfo')
              .child(
                S.document()
                  .schemaType('contactInfo')
                  .documentId('contactInfo')
              ),
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            S.divider(),
            // Regular document types
            ...S.documentTypeListItems().filter(
              (item) => !['homepage', 'navigation', 'contactInfo', 'aboutPage'].includes(item.getId()!)
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
