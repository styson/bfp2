export type Scenario = {
  name: string;
  id: string;
  att?: string;
  from?: string;
  boards?: string;
  arc_id?: string;
};

export type Sale = {
  name: string;
  description: string;
  id: number;
  imageF?: string;
  price: number;
  button?: string;
  paypalKey?: string;
  active?: boolean;
  links?: Product[];
};

export type Product = {
  name: string;
  description: string;
  year: number;
  shortDescription?: string;
  includes?: string;
  id: number;
  imageF?: string;
  imageB?: string;
  price: number;
  intPrice: number;
  paypalKey?: string;
  page: string;
  active?: boolean;
  who?: string;
  scenarios?: Scenario[];
  button?: string;
  intButton?: string;
};

export type Download = {
  description?: string;
  name: string;
  page?: string;
  files?: Download[];
  group?: string;
  active?: boolean;
};

export type Order = {
  productId: string;
  quantity: number;
};

export type CounterOption = {
  type: string;
  price: number;
};

export type Part = {
  name: string;
  active?: boolean;
  description?: string;
  price?: number;
  prices?: CounterOption[];
  intPrice?: number;
  image?: string;
  paypalKey?: string;
  type?: string;
  group?: string;
  files?: Part[];
};
