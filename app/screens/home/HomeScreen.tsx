import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import ItemsList from '../../components/items/ItemList';
import {fetchItems} from '../../asyncActions/items';
import {fetchItemsSaga} from '../../store_legacy/items/actions';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {items, error} = useAppSelector(state => state.items);

  useEffect(() => {
    // async thunk example
    // dispatch(fetchItems());

    // async Saga example
    dispatch(fetchItemsSaga());
  }, [dispatch]);

  return (
    <View>
      <ItemsList error={error} items={items} />
    </View>
  );
};

export default HomeScreen;
