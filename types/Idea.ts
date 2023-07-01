type TextComponent = {
  id: number;
  __component: 'content.text';
  text: string;
};

type ImageComponent = {
  id: number;
  __component: 'content.image';
  image: {
    data: {
      id: number;
      attributes: {
        formats: {
          small: {
            url: string;
            width: number;
            height: number;
          };
          medium: {
            url: string;
            width: number;
            height: number;
          };
          large: {
            url: string;
            width: number;
            height: number;
          };
          thumbnail: {
            url: string;
            width: number;
            height: number;
          };
        };
        url: string;
      };
    };
  };
  caption?: string;
  alternative_text?: string;
};

type Idea = {
  id: number;
  attributes: {
    title: string;
    published: string;
    content: string | null;
    content_new: (TextComponent | ImageComponent)[] | null;
    excerpt: string;
    author: string;
    slug: string;
    card_image: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    };
  };
};

export default Idea;
