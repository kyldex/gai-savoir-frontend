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
    mainVideoUrl: string;
    content: string[];
    slug: string;
    speakers: {
      firstName: string;
      lastName: string;
      description: string;
      imageUrl?: string;
    }[],
    // TODO: prefer type guards
    subcategory?: null;
  };
};

export type EventData = Event[];
