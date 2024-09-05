import {Item} from '../store_legacy/items/types';
import {AppDispatch} from '../store';
import {itemsActions} from '../store/items/itemsSlice';

export const fetchItems = () => {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch(itemsActions.fetchingItems());
      const response = await fetch('https://fakestoreapi.com/products?limit=6');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const items: Item[] = await response.json();
      dispatch(itemsActions.fetchingItemsSuccess(items));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(itemsActions.fetchingItemsFailure(error.message));
      }
    }
  };
};
