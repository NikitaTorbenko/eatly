export interface IRestaurant {
  id: number;
  name: string;
  category: {
    title: string;
    background_color: string;
    color: string;
  };
  rating: number;
  delivery_time: string;
  image: string;
  dishes: number[];
}
