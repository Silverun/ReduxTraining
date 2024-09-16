import React from 'react';
import {View} from 'react-native';
import ItemsList from '../../components/items/ItemList';
import {styles} from './HomeScreen.styles';
import useHomeScreen from '../../hooks/useHomeScreen';

const HomeScreen = () => {
  const {error, items, isLoading} = useHomeScreen();

  return (
    <View style={styles.container}>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
