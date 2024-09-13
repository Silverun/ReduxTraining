import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/login/LoginScreen';
import MainRoute from './routes/MainRoute';
import {Routes} from './routes';
import useRootStore from './context/useStore';
import {observer} from 'mobx-react-lite';
import {AuthSliceInstance} from './store/auth/auth';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  // const isAuthenticated = useAuthSlice(state => state.isAuthenticated);
  const isAuthenticated = useRootStore().auth.isAuthenticated;
  // const isAuthenticated = AuthSliceInstance.isAuthenticated;

  useEffect(() => {
    console.log('isAuthenticated -', isAuthenticated);
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
};
export default observer(Main);
