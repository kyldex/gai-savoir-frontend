import Comment from './Comment';

export default interface Article {
  id: string;
  attributes: {
    title: string;
    published: string;
    content: string;
    excerpt: string;
    // We need to parse data first by removing data property.
    comments?: Comment[];
    author: string;
    slug: string;
  };
}
