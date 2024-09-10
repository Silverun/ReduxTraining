import {ItemsActions, ItemsState} from './items.types';
import {create} from 'zustand';
import {fetchItems} from '../../asyncActions/itemsZustand';
import {immer} from 'zustand/middleware/immer';
import {AxiosError} from 'axios';

const initialItemsState: ItemsState = {
  items: [],
  isLoading: false,
  error: null,
};

export const useItemsSlice = create<ItemsState & ItemsActions>()(
  immer(set => ({
    ...initialItemsState,
    getItems: async () => {
      try {
        set(state => {
          state.isLoading = true;
        });
        const items = await fetchItems();
        set(state => {
          state.items = items || [];
          state.isLoading = false;
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          set(state => {
            state.error = error.message;
            state.isLoading = false;
          });
        }
      }
    },
  })),
);
