import {createAsyncThunk} from '@reduxjs/toolkit';
import {Item} from '../store/items/items.types';
import {API_endpoints} from '../constants/api';

export const fetchItemsAsyncThunk = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_endpoints.LOCAL);
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
