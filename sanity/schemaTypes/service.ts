import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (Slug)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Used for URLs or HTML IDs, e.g., web-development',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex color code, e.g., #0095eb',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Content (Body)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for the dedicated service page.',
    }),
  ],
})
