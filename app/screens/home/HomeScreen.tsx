import React, {useEffect} from 'react';
import {View} from 'react-native';
import ItemsList from '../../components/items/ItemList';
import {styles} from './HomeScreen.styles';
import useHomeScreen from '../../hooks/useHomeScreen';
import {useItemsSlice} from '../../store/items/itemsSlice';

const HomeScreen = () => {
  const {error, items, isLoading, getItems} = useItemsSlice();

  useEffect(() => {
    getItems();
    console.log(items, 'items');
  }, [getItems, items]);

  return (
    <View style={styles.container}>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
