enum enumEndpoints {
  PRODUCTS = "PRODUCTS",
  FAQS = "FAQS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.PRODUCTS]: "/products",
  [enumEndpoints.FAQS]: "/faqs",
};
