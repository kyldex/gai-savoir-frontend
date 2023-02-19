import Article from './Article';

export interface ArticlesData {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// If fetched with Strapi slug filters, data is an array.
export interface ArticleDataById {
  data: Article;
  meta: {};
}

// If fetched with Strapi slug filters, data is an array.
export interface ArticleDataBySlug {
  data: [Article];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
