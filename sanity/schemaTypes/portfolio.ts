import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (Slug)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Design', value: 'web' },
          { title: 'Software', value: 'software' },
          { title: 'Design', value: 'design' },
        ],
      },
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Primary Category Label',
      type: 'string',
      description: 'Used for display, e.g., Software Development',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'tech',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'href',
      title: 'External Link',
      type: 'url',
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Case Study',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Extensive rich text content for the project details page.',
    }),
  ],
})
