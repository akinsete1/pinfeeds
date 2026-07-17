import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used for internal reference (e.g. "Home Page")',
      initialValue: 'Home Page',
    }),
    defineField({
      name: 'heroPhrases',
      title: 'Hero Section Typing Phrases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The phrases that cycle in the hero section typewriter effect.',
    }),
    defineField({
      name: 'aboutSummary',
      title: 'About Summary',
      type: 'text',
      description: 'The short summary of the company shown on the home page.',
    }),
    defineField({
      name: 'processSteps',
      title: 'Our Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Call to Action Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Call to Action Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
        },
      ],
      description: 'The FAQ section displayed on the home page.',
    }),
  ],
});
