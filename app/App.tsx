import React from 'react';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {rootStore, rootStoreContext} from './store';

function App() {
  return (
    <rootStoreContext.Provider value={rootStore}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </rootStoreContext.Provider>
  );
}

export default App;
