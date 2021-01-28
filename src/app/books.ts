export enum BookType {
  FIC = 'Fiction',
  NON_FIC = 'Non Fiction',
  SYFI = 'Science Fiction'
}
export interface BookData {
  name: string;
  author: string;
  photo: string;
  bookType: BookType;
}