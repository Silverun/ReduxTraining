import {createAsyncThunk} from '@reduxjs/toolkit';
import {Item} from '../store/items/items.types';

export const fetchItemsAsyncThunk = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=6');
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const items: Item[] = await response.json();
      return items;
    } catch (error: unknown) {
      if (error instanceof Error) {
        thunkAPI.rejectWithValue(error.message || 'Unexpected error occurred');
      }
    }
  },
);
