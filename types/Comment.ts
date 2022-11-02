export default interface Comment {
  id: number;
  attributes: {
    content: string;
    published: string;
    author: string;
  };
}
