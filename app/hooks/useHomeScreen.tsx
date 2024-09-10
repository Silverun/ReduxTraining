import {useEffect} from 'react';
import {storeIndex} from '../store';

const useItems = () => {
  const {error, isLoading, getItems, items} = storeIndex.items();

  useEffect(() => {
    console.log('useHomeRan');
    getItems();
  }, []);

  return {error, isLoading, items};
};
export default useItems;
