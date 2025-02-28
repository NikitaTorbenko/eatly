import { ApiClient, Endpoints } from "@/shared/api";

export const getPopularProducts = async () => {
  const result = await ApiClient({
    url: `${Endpoints.POPULAR_PRODUCTS}`,
  });

  return result;
};
