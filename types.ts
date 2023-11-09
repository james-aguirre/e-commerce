export interface Product {
  id: string;
  active?: boolean;
  name: string;
  description: string;
  image1: string;
  image2: string;
  category: string;
  is_featured?: boolean;
  price: number;
  size?: string;
  brand?: string;
}

export interface Image {
  id: string;
  src: string;
}
