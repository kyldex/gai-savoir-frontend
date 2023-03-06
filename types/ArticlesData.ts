import Article from './Article';

export type ArticlesData = {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// If fetched with Strapi slug filters, data is an array.
export type ArticleDataById = {
  data: Article;
  meta: {};
};

// If fetched with Strapi slug filters, data is an array.
export type ArticleDataBySlug = {
  data: [Article];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
