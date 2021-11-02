export interface Item {
  vendor: string;
  name: string;
  price: number;
  is_hybrid?: boolean;
  system?: string;
}

export interface Category {
  title: string;
  items: Item[]
}
