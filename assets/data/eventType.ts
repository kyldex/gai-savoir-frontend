export type Event = {
  id: string;
  attributes: {
    title: string;
    excerpt: string;
    card_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    published: string;
    mainImgUrl: string;
    content: string[];
    slug: string;
  };
};

export type EventData = Event[];
