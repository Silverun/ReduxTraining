import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import {Item} from '../../store_legacy/items/types';
import {styles} from './CartScreen.styles';
import {removeItemFromCart} from '../../store_legacy/cart/actions';

const CartScreen = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: Item) => total + item.price,
    0,
  );

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItemFromCart(itemId));
  };

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemTitle}>{item.title}</Text>
      <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
      <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
    </View>
  );
};

export default CartScreen;
