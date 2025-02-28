import { ApiClient, Endpoints } from "@/shared/api";

export const getRestaurants = async () => {
  const result = await ApiClient({
    url: `${Endpoints.RESTAURANTS}`,
  });

  return result;
};
