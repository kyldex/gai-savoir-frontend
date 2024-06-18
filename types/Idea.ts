import { SUBCATEGORY_DATA } from './shared';

type TextComponent = {
  id: number;
  __component: 'content.text';
  text: string;
};

type ImageData = {
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
    hash: string;
    url: string;
  };
};

type ImageComponent = {
  id: number;
  __component: 'content.image';
  image: {
    data: ImageData;
  };
  caption?: string;
  alternative_text?: string;
};

type CarouselComponent = {
  id: number;
  __component: 'content.carousel';
  images: {
    data: ImageData[];
  };
};

type Idea = {
  id: number;
  attributes: {
    title: string;
    published: string;
    content: string | null;
    content_components:
      | (TextComponent | ImageComponent | CarouselComponent)[]
      | null;
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
    subcategory?: SUBCATEGORY_DATA | null;
  };
};

export default Idea;
