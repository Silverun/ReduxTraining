import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import ItemsList from '../../components/items/ItemList';
import {fetchItems} from '../../asyncActions/items';
import {styles} from './HomeScreen.styles';
import {fetchItemsAsyncThunk} from '../../asyncActions/itemsAsyncThunk';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {error, isLoading, items} = useAppSelector(state => state.items);

  useEffect(() => {
    // async Action
    // dispatch(fetchItems());
    dispatch(fetchItemsAsyncThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
