import {ItemsActions, ItemsState} from './items.types';
import {create} from 'zustand';
import {fetchItems, fetchItemsPaginated} from '../../asyncActions/itemsZustand';
import {immer} from 'zustand/middleware/immer';
import {AxiosError} from 'axios';

const initialItemsState: ItemsState = {
  items: [],
  isLoading: false,
  error: null,
  totalStoreItems: 0,
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
    getItemsPaged: async (
      page: number | undefined,
      limit: number | undefined,
    ) => {
      console.log('getItemsPaged - ', page, limit);
      try {
        set(state => {
          state.isLoading = true;
        });
        const {items, totalCount} = await fetchItemsPaginated(page, limit);
        set(state => {
          state.totalStoreItems = totalCount;
          if (page && page > 1) {
            state.items = [...state.items, ...items];
            state.isLoading = false;
          } else {
            state.items = items;
            state.isLoading = false;
          }
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
