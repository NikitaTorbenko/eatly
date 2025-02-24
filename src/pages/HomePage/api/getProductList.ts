import { ApiClient, Endpoints } from "@/shared/api";

export const getProductList = async (restaurant_id: number) => {
  const { data } = await ApiClient({
    url: `${Endpoints.PRODUCTS}${restaurant_id}`,
  });

  return data;
};
