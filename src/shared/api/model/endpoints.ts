enum enumEndpoints {
  FAQS = "FAQS",
  POPULAR_PRODUCTS = "POPULAR_PRODUCTS",
  RESTAURANTS = "RESTAURANTS",
  RESTAURANT = "RESTAURANT",
  PRODUCTS = "PRODUCTS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.FAQS]: "/faqs",
  [enumEndpoints.POPULAR_PRODUCTS]: "/popular_dishes",
  [enumEndpoints.RESTAURANTS]: "/restaurants",
  [enumEndpoints.RESTAURANT]: "/restaurant/:id",
  [enumEndpoints.PRODUCTS]: "/dishes?restaurant_id=",
};
