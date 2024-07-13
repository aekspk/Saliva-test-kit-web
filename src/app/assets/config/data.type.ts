export type Brand = {
  name: string;
  checked: boolean;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  orderQuantity: string;
  img: string;
  date: string;
};

export type ProductDetails = {
  id: string;
  name: string;
  brand: string;
  price: number;
  orderQuantity: string;
  img: string;
  date: string;
  description: string;
};
