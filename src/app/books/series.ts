import { Book } from './book'
export interface Serie {
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  books: Book[];
}
