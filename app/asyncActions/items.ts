import {Dispatch} from 'redux';
import {getItems} from '../store_legacy/items/actions';
import {GetItemsAction, Item} from '../store_legacy/items/types';

export const fetchItems = () => {
  return function (dispatch: Dispatch<GetItemsAction>) {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then((data: Item[]) => dispatch(getItems(data)));
  };
};
