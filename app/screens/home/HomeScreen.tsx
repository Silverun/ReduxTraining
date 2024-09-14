import React from 'react';
import {View} from 'react-native';
import ItemsList from '../../components/items/ItemList';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ItemsList />
    </View>
  );
};

export default HomeScreen;
