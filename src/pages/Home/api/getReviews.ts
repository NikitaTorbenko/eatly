import { ApiClient, Endpoints } from "@/shared/api";

export const getReviews = async () => {
  const result = await ApiClient({
    url: `${Endpoints.REVIEWS}`,
  });

  return result;
};
