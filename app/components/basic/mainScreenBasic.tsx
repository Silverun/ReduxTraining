import React from 'react';
import {observer} from 'mobx-react-lite';
import useRootStore from '../../context/useStore';
import {Button, Text, View} from 'react-native';
import {styles} from './basic.styles';

export const MainBasicScreen = observer(() => {
  const rootStore = useRootStore();

  const logoutBasic = () => {
    rootStore.auth.logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{rootStore.auth.user?.name}</Text>
      <Button title="logout" onPress={logoutBasic} />
    </View>
  );
});
