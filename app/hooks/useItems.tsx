import {useEffect} from 'react';
import {storeIndex} from '../store';

const useItems = (page: number) => {
  const {error, isLoading, items, getItemsPaged, totalStoreItems} =
    storeIndex.items();

  useEffect(() => {
    console.log('use Items ran');
    getItemsPaged(page);
  }, [page]);

  return {error, isLoading, items, getItemsPaged, totalStoreItems};
};
export default useItems;
