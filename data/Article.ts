export default interface Article {
  id: string;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    author: string;
    publishedAt: string;
  }
}
