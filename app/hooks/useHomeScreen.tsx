import {useEffect} from 'react';
import {storeIndex} from '../store';

const useHomeScreen = () => {
  const {error, isLoading, getItems, items} = storeIndex.items();

  useEffect(() => {
    console.log('useHomeRan');
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {error, isLoading, items};
};
export default useHomeScreen;
