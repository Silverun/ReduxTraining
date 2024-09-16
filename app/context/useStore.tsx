import {useContext} from 'react';
import {rootStoreContext} from './contextProvider';

const useRootStore = () => {
  const store = useContext(rootStoreContext);

  if (!store) {
    throw new Error('Root store context is outside of its provider');
  }

  return store;
};

export default useRootStore;
