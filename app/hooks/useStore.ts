import {useContext} from 'react';
import {rootStoreContext} from '../store';

const useStore = () => {
  const store = useContext(rootStoreContext);
  return store;
};

export default useStore;
