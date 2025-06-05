import {defineType, defineField} from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'image',
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
      hidden: ({document}) => !document?.title,
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: {
        type: 'category',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {
        type: 'author',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
  ],
})
