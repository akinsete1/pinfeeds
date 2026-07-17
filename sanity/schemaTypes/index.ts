import { type SchemaTypeDefinition } from 'sanity';
import { serviceType } from './service';
import { portfolioType } from './portfolio';
import { blogType } from './blog';
import { homePageType } from './homePage';
import { aboutPageType } from './aboutPage';
import { contactPageType } from './contactPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageType,
    aboutPageType,
    contactPageType,
    serviceType,
    portfolioType,
    blogType,
  ],
};
