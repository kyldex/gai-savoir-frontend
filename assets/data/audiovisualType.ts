export type Audiovisual = {
  id: string;
  attributes: {
    title: string;
    excerpt: string;
    gai_savoir_production: boolean;
    card_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    published: string;
    videoUrl: string;
    content: string[];
    slug: string;
  };
};

export type AudiovisualData = Audiovisual[];
