import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {counterStore} from './store/basic/basic';
import {observer} from 'mobx-react-lite';
import useRootStore from './context/useStore';
import {AuthStore} from './store/auth/auth';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './Main';
import {MainBasicScreen} from './components/basic/mainScreenBasic';
import {LoginBasicScreen} from './components/basic/loginScreenBasic';

// type Props = {
//   counter: ReturnType<typeof counter>;
// };

const Stack = createStackNavigator<RootStackParamList>();

export const Basic = observer(() => {
  const isAuthBasic = useRootStore().auth.isAuthenticated;

  return (
    <Stack.Navigator>
      {isAuthBasic ? (
        <Stack.Screen name="Main" component={MainBasicScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginBasicScreen} />
      )}
    </Stack.Navigator>
  );
});
