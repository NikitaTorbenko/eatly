import { ApiClient, Endpoints } from "@/shared/api";

export const getArticles = async () => {
  const result = await ApiClient({
    url: `${Endpoints.BLOGS}`,
  });

  return result;
};
