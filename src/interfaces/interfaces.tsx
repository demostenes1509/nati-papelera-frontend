export interface ICategory {
  id: string;
  name: string;
  url: string;
  selected: boolean;
  expanded: boolean;
  products: Array<IProduct>;
}

export interface IProvider {
  id: string;
  name: string;
  url: string;
}

export interface IPicture {
  id: string;
  mimeType: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  url: string;
  selected: boolean;
  packaging: Array<IPackaging>;
  pictures: Array<IPicture>;
  mlCategoryId: string;
  mlCategoryName: string;
}

export interface IPackaging {
  id: string;
  name: string;
  price: number;
}
