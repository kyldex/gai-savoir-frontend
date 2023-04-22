import Idea from './Idea';

export type IdeasData = {
  data: Idea[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type IdeaDataById = {
  data: Idea;
  meta: {};
};

// If fetched with Strapi slug filters, data is an array.
export type IdeaDataBySlug = {
  data: [Idea];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
