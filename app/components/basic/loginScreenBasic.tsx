import React from 'react';
import {observer} from 'mobx-react-lite';
import {styles} from './basic.styles';
import {Button, Text, View} from 'react-native';
import useRootStore from '../../context/useStore';
import {counterStore} from '../../store/basic/basic';

export const LoginBasicScreen = observer(() => {
  const rootStore = useRootStore();

  const loginBasic = () => {
    rootStore.auth.login({email: '123', name: 'Bobby', password: '3'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>
        {String(rootStore.auth.isAuthenticated)}
      </Text>
      <Text style={styles.countText}>{counterStore.count}</Text>
      <Button title="-" onPress={() => counterStore.decrement()} />
      <Button title="+" onPress={() => counterStore.increment()} />
      <Button title="login" onPress={loginBasic} />
    </View>
  );
});
