import {useEffect} from 'react';
import useRootStore from '../context/useStore';

const useHomeScreen = () => {
  const {error, isLoading, items, getItems} = useRootStore().items;

  useEffect(() => {
    getItems();
  }, [getItems]);

  return {error, isLoading, items};
};
export default useHomeScreen;
