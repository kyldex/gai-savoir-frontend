import AudiovisualProduction from './AudiovisualProduction';

export type AudiovisualProductionsData = {
  data: AudiovisualProduction[];
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
export type AudiovisualProductionDataBySlug = {
  data: [AudiovisualProduction];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
