import {
  FetchItemsSagaAction,
  GetItemsAction,
  GetItemsFailedAction,
  Item,
  ItemActions,
} from './types';

export const getItems = (items: Item[]): GetItemsAction => {
  return {
    type: ItemActions.getItems,
    payload: items,
  };
};

export const getItemsFailed = (error: Error): GetItemsFailedAction => {
  return {
    type: ItemActions.getItemsFailed,
    payload: error,
  };
};

export const fetchItemsSaga = (): FetchItemsSagaAction => {
  return {
    type: ItemActions.fetchItemsSaga,
  };
};
