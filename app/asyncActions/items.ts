import {Item} from '../store_legacy/items/types';
import {AppDispatch} from '../store';
import {itemsActions} from '../store/items/itemsSlice';

export const fetchItems = () => {
  return async function (dispatch: AppDispatch) {
    dispatch(itemsActions.fetchingItems());

    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const items: Item[] = await response.json();
      dispatch(itemsActions.fetchingItemsSuccess(items));
    } catch (error) {
      dispatch(itemsActions.fetchingItemsFailure(error as string));
    }
  };
};
