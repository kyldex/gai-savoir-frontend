type Idea = {
  id: string;
  attributes: {
    title: string;
    published: string;
    content: string;
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
