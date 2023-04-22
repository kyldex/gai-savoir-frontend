import { ArticlesData } from '../types/IdeasData';

// To use for tests.
const ARTICLES_DATA_MOCK: ArticlesData = {
  data: [
    {
      id: '1010',
      attributes: {
        title: "L'amour est-il devenu une valeur ringarde ?",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
        published: '2022-11-02',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'jean90',
        slug: 'l-amour-est-il-une-valeur-ringarde'
      }
    },
    {
      id: '1011',
      attributes: {
        title: 'Peut-on réellement vivre ensemble ?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2022-11-04',
        author: 'jeanne90',
        slug: 'peut-on-reellement-vivre-ensemble'
      }
    },
    {
      id: '1012',
      attributes: {
        title: "L'art a-t-il une utilité ?",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2022-11-04',
        author: 'philo85',
        slug: 'l-art-a-t-il-une-utilite'
      }
    },
    {
      id: '1013',
      attributes: {
        title: "Comment réconciler le singulier et le collectif ?",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac auctor nisi. In hac habitasse platea dictumst. Phasellus tempus auctor maximus. Vestibulum fringilla sem vitae libero faucibus, porttitor commodo dui volutpat. Quisque est dolor, vehicula dictum pharetra ac, pellentesque et quam.',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2022-11-14',
        author: 'jeanne90',
        slug: 'comment-reconciler-le-singulier-et-le-collectif'
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1
    }
  }
};

export default ARTICLES_DATA_MOCK;
