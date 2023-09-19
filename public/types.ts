export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  category: string;
  //   metadata?: Stripe.Metadata;
}

export interface Image {
  id: string;
  url: string;
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
