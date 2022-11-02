export default interface Article {
  id: string;
  attributes: {
    title: string;
    published: string;
    content: string;
    excerpt: string;
    comments?: string;
    author: string;
    slug: string;
  }
}
