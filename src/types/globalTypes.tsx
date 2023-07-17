export interface IBooks {
  _id?: number | string;
  title: string;
  price?: number;
  image?: string;
  author: string;
  publication: string | number;
  genre: string;
}
