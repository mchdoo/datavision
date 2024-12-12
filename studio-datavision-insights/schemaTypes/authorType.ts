import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'position',
      type: 'string',
      description: 'Puesto de trabajo de quien escribe (ej. CEO, Developer, SEO)',
    }),
  ],
})
