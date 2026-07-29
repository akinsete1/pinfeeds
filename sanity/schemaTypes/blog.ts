import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date Published',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── SEO Fields ──────────────────────────────────────────
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Custom title for search engines (50-60 characters ideal). Falls back to the post title if left empty.',
      group: 'seo',
      validation: (Rule) => Rule.max(70).warning('Keep the meta title under 70 characters for best results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'A compelling summary shown in Google search results (120-160 characters ideal). Falls back to excerpt if left empty.',
      group: 'seo',
      validation: (Rule) => Rule.max(170).warning('Keep the meta description under 170 characters for best results.'),
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Relevant keywords/phrases for this post (e.g. "web design Lagos", "AI development"). Add 5-10 targeted keywords.',
      group: 'seo',
      options: {
        layout: 'tags',
      },
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      icon: () => '🔍',
    },
  ],
})
