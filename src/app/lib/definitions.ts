export type ReviewType = {
  review_id: number; // Primary key
  product_id: number; // Foreign key referencing products
  user_id: number; // Foreign key referencing users
  rating: number; // Rating (1-5)
  review_text: string; // Review content
};
