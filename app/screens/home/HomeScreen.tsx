import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import ItemsList from '../../components/items/ItemList';
import {fetchItems} from '../../asyncActions/items';
import {fetchItemsSaga} from '../../store_legacy/items/actions';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {error, isLoading, items} = useAppSelector(state => state.items);

  useEffect(() => {
    // async Action
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <View>
      <ItemsList error={error} items={items} isLoading={isLoading} />
    </View>
  );
};

export default HomeScreen;
