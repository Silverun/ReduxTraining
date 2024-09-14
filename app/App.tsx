import React from 'react';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {RootStoreProvider} from './context/contextProvider';
import {spy} from 'mobx';
import {Basic} from './Basic';
import {counter} from './store/basic/basic';

// spy(e => {
//   console.log(e);
// });

function App() {
  // const counterInstance_1 = counter();
  // const counterInstance_2 = counter();

  return (
    <RootStoreProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </RootStoreProvider>
    // <>
    //   <Basic counter={counterInstance_1} />
    //   <Basic counter={counterInstance_2} />
    // </>
  );
}

export default App;
