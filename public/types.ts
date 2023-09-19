export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  category: string;
  is_featured?: boolean;
  price?: number;
  //   metadata?: Stripe.Metadata;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
