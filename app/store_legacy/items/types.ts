export const ItemActions = {
  getItems: 'GET_ITEMS',
  getItemsFailed: 'GET_ITEMS_FAILED',
  fetchItemsSaga: 'FETCH_ITEMS_SAGA',
} as const;

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
  error: Error | null;
}

export type GetItemsAction = {
  type: typeof ItemActions.getItems;
  payload: Item[];
};

export type GetItemsFailedAction = {
  type: typeof ItemActions.getItemsFailed;
  payload: Error;
};

export type FetchItemsSagaAction = {
  type: typeof ItemActions.fetchItemsSaga;
};

export type ItemsActionsType =
  | GetItemsAction
  | FetchItemsSagaAction
  | GetItemsFailedAction;
