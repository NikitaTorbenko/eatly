export interface IArticle {
  id: number;
  title: string;
  author: string;
  author_image: string;
  date: string;
  image: string;
  content: [
    {
      section: string;
      text: string;
    }
  ];
}
