enum enumEndpoints {
  FAQS = "FAQS",
  RESTAURANTS = "RESTAURANTS",
  RESTAURANT = "RESTAURANT",
  PRODUCTS = "PRODUCTS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.FAQS]: "/faqs",
  [enumEndpoints.RESTAURANTS]: "/restaurants",
  [enumEndpoints.RESTAURANT]: "/restaurant/:id",
  [enumEndpoints.PRODUCTS]: "/dishes?restaurant_id=",
};
