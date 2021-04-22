export interface ICategory {
  id: string;
  name: string;
  url: string;
  selected: boolean;
  products: Array<IProduct>;
}

export interface IProvider {
  id: string;
  name: string;
  url: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  url: string;
  selected: boolean;
  packaging: Array<IPackaging>;
}

export interface IPackaging {
  id: string;
  name: string;
  price: number;
}
