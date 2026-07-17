import { defineField, defineType } from 'sanity';

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used for internal reference (e.g. "Contact Page")',
      initialValue: 'Contact Page',
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Emoji Icon', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'href', title: 'Link (Optional, e.g. mailto:... or tel:...)', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
