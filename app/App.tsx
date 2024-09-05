import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';

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
