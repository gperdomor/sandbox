export interface IBook {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export interface ICartItem {
  id: number;
  description: string;
  cost: number;
}

export interface ICart {
  items: ICartItem[];
}
