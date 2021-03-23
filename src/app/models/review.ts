export type ReviewRequest = {
  name: string;
  reviewBody: string;
  rating: number;
  bookId: string;
};

export type ReviewResponse = {
  id: string;
  bookId: string;
  name: string;
  rating: number;
  reviewBody: string;
};
