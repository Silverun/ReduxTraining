import React, {createContext, useEffect} from 'react';
import {RootStore, rootStore} from '../store';

export const rootStoreContext = createContext<RootStore | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const RootStoreProvider = (props: Props) => {
  useEffect(() => {
    console.log('RootStoreProvider mounted');
  }, []);

  return (
    <rootStoreContext.Provider value={rootStore}>
      {props.children}
    </rootStoreContext.Provider>
  );
};
