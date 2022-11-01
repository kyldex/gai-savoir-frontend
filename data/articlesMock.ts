import Article from './Article';

// Temporary mock before creating DB.
const ARTICLES_MOCK: Article[] = [
  {
    id: '1010',
    attributes: {
      slug: 'amour-est-il-une-valeur-ringarde',
      title: "L'amour est-il devenu une valeur ringarde ?",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'jean90',
      publishedAt: '10/10/2022'
    }
  },
  {
    id: '1011',
    attributes: {
      slug: 'peut-on-reellement-vivre-ensemble',
      title: 'Peut-on réellement vivre ensemble ?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'jeanne90',
      publishedAt: '15/10/2022'
    }
  },
  {
    id: '1012',
    attributes: {
      slug: 'art-a-t-il-une-utilite',
      title: "L'art a-t-il une utilité ?",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'philo85',
      publishedAt: '17/10/2022'
    }
  }
];

export default ARTICLES_MOCK;
