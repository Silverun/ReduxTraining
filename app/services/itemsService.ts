import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_endpoints} from '../constants/api';
import {Item} from '../store/items/items.types';

export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_endpoints.LOCAL_BASE}),
  endpoints: build => ({
    fetchAllItems: build.query<Item[], void>({
      query: () => ({url: API_endpoints.LOCAL_ITEMS}),
    }),
  }),
});

export const {useFetchAllItemsQuery} = itemsAPI;
