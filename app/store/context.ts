import {createContext, ReactNode} from 'react';
import {RootStore} from '.';

const rootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider = ({
  children: ReactNode,
}) => {
  return (
    
  )
