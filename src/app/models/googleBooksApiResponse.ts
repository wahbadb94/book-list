import { Book } from './book';

export type GoogleBooksApiResponse = {
  kind: string;
  totalItems: number;
  items: Book[];
};
