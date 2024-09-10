import axios, {AxiosError} from 'axios';
import {API_endpoints} from '../constants/api';
import {Item} from '../store/items/items.types';

export const fetchItems = async () => {
  try {
    const response = await axios.get<Item[] | undefined>(API_endpoints.LOCAL);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
