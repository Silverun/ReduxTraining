import React, {useEffect} from 'react';
import {View} from 'react-native';
import ItemsList from '../../components/items/ItemList';
import {styles} from './HomeScreen.styles';
import useRootStore from '../../context/useStore';

const HomeScreen = () => {
  // const {error, items, isLoading, getItems} = useItemsSlice();
  const {error, items, isLoading, getItems} = useRootStore().items;

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <View style={styles.container}>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
