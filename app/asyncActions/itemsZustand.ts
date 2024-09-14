import axios, {AxiosError} from 'axios';
import {API_endpoints} from '../constants/api';
import {Item} from '../store/items/items.types';

export const fetchItems = async () => {
  try {
    const response = await axios.get<Item[]>(API_endpoints.LOCAL);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const fetchItemsPaginated = async (
  page: number | undefined,
  limit: number = 3,
) => {
  try {
    const response = await axios.get<Item[]>(
      `${API_endpoints.LOCAL}?page=${page}&limit=${limit}`,
    );

    return {
      items: response.data,
      totalCount: +response.headers['x-total-count'],
    };
  } catch (error) {
    throw error as AxiosError;
  }
};
