import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import ItemsList from '../../components/items/ItemList';
import {fetchItems} from '../../asyncActions/items';
import {styles} from './HomeScreen.styles';
import {fetchItemsAsyncThunk} from '../../asyncActions/itemsAsyncThunk';
import {useFetchAllItemsQuery} from '../../services/itemsService';

const HomeScreen = () => {
  // const dispatch = useAppDispatch();
  // const {error, isLoading, items} = useAppSelector(state => state.items);
  const {data: items, error, isLoading} = useFetchAllItemsQuery();

  // useEffect(() => {
  //   // async Action
  //   // dispatch(fetchItems());
  //   // createAsyncThunk
  //   // dispatch(fetchItemsAsyncThunk());
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
