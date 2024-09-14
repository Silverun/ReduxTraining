export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ItemsState {
  items: Item[];
  isLoading: boolean;
  error: string | null;
  totalStoreItems: number;
}

export interface ItemsActions {
  getItems: () => Promise<void>;
  getItemsPaged: (page?: number, limit?: number) => Promise<void>;
}
