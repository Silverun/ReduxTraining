import {useAuthSlice} from './auth/authSlice';
import {useItemsSlice} from './items/itemsSlice';

export const storeIndex = {
  auth: useAuthSlice,
  items: useItemsSlice,
};
