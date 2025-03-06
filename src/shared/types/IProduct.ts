export interface IProduct {
  id: number;
  name: string;
  category: {
    title: string;
    background_color: string;
    color: string;
  };
  price: number;
  rating: number;
  delivery_time: string;
  image: string;
}
