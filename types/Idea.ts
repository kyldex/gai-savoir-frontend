export default interface Idea {
  id: string;
  attributes: {
    title: string;
    published: string;
    content: string;
    excerpt: string;
    author: string;
    slug: string;
  };
}
