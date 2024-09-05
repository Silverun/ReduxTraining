import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Item, ItemsState} from './items.types';
import {fetchItemsAsyncThunk} from '../../asyncActions/itemsAsyncThunk';

const initialItemsState: ItemsState = {
  items: [],
  isLoading: false,
  error: null,
};

const itemsSlice = createSlice({
  initialState: initialItemsState,
  name: 'items',
  reducers: {
    // fetchingItems(state) {
    //   state.isLoading = true;
    // },
    // fetchingItemsSuccess(state, action: PayloadAction<Item[]>) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // fetchingItemsFailure(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchItemsAsyncThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchItemsAsyncThunk.fulfilled,
        (state, action: PayloadAction<Item[] | undefined>) => {
          state.isLoading = false;
          //???? Why do we need that check
          if (action.payload) {
            state.items = action.payload;
          }
          state.error = null;
        },
      )
      .addCase(fetchItemsAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const itemsReducer = itemsSlice.reducer;
export const itemsActions = itemsSlice.actions;
