import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/login/LoginScreen';
import MainRoute from './routes/MainRoute';
import {Routes} from './routes';
import useRootStore from './context/useStore';
import {observer} from 'mobx-react-lite';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = observer(() => {
  const isAuthenticated = useRootStore().auth.isAuthenticated;

  useEffect(() => {
    console.log('isAuthenticated from Main -', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name={Routes.Main} component={MainRoute} />
      ) : (
        <Stack.Screen name={Routes.Login} component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
});

export default Main;
