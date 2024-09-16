import React from 'react';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {RootStoreProvider} from './context/contextProvider';

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

    // <RootStoreProvider>
    //   <NavigationContainer>
    //     <Basic />
    //   </NavigationContainer>
    // </RootStoreProvider>
  );
}

export default App;
