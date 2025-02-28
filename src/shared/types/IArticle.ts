export interface IArticle {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  content: [
    {
      section: string;
      text: string;
    }
  ];
}
