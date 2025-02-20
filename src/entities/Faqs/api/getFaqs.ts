import { ApiClient, Endpoints } from "@/shared/api";

export const getFaqs = async () => {
  const result = await ApiClient({
    url: `${Endpoints.FAQS}`,
  });

  return result;
};
