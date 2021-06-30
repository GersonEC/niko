export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

export interface Size {
  size: number;
  available: boolean;
}

export interface ProductCard {
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
