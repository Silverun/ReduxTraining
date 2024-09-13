import React from 'react';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {RootStoreProvider} from './context/contextProvider';
import {spy} from 'mobx';

// spy(e => {
//   console.log(e);
// });

function App() {
  return (
    <RootStoreProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </RootStoreProvider>
  );
}

export default App;
