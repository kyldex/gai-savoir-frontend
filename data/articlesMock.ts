import Article from './Article';

// Temporary mock before creating DB.
const ARTICLES_MOCK: Article[] = [
  {
    id: '1010',
    slug: 'amour-est-il-une-valeur-ringarde',
    title: "L'amour est-il devenu une valeur ringarde ?",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
    metaDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authorId: 'jean90',
    date: '10/10/2022'
  },
  {
    id: '1011',
    slug: 'peut-on-reellement-vivre-ensemble',
    title: 'Peut-on réellement vivre ensemble ?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
    metaDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authorId: 'jeanne90',
    date: '15/10/2022'
  },
  {
    id: '1012',
    slug: 'art-a-t-il-une-utilite',
    title: "L'art a-t-il une utilité ?",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
    metaDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authorId: 'philo85',
    date: '17/10/2022'
  }
];

export default ARTICLES_MOCK;
