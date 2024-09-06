import {Dispatch} from 'redux';
import {getItems} from '../store_legacy/items/actions';
import {GetItemsAction, Item} from '../store_legacy/items/types';
import {API_ENDPOINTS} from '../constants/api';

export const fetchItems = () => {
  return function (dispatch: Dispatch<GetItemsAction>) {
    fetch(API_ENDPOINTS.LOCAL)
      .then(res => res.json())
      .then((data: Item[]) => dispatch(getItems(data)));
  };
};
