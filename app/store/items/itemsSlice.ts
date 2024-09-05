import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Item, ItemsState} from './items.types';

const initialItemsState: ItemsState = {
  items: [],
  isLoading: false,
  error: null,
};

const itemsSlice = createSlice({
  initialState: initialItemsState,
  name: 'items',
  reducers: {
    fetchingItems(state) {
      state.isLoading = true;
    },
    fetchingItemsSuccess(state, action: PayloadAction<Item[]>) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingItemsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const itemsActions = itemsSlice.actions;
