import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/login/LoginScreen';
import MainRoute from './routes/MainRoute';
import {Routes} from './routes';
import {auth} from './store/auth/authSlice';
import {observer} from 'mobx-react';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  useEffect(() => {
    console.log('isAuthenticated', auth.isAuthenticated);
  });

  const isAuthenticated = auth.isAuthenticated;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name={Routes.Main} component={MainRoute} />
      ) : (
        <Stack.Screen name={Routes.Login} component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Main;
