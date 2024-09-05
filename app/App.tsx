import React from 'react';
import {Provider} from 'react-redux';
import store from './store_legacy';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
