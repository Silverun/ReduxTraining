import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/login/LoginScreen';
import MainRoute from './routes/MainRoute';
import {useAppSelector} from './hooks/Redux';
import {Routes} from './routes';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

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
