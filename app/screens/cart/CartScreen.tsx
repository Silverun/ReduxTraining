import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/Redux';
import {styles} from './CartScreen.styles';
import {cartActions} from '../../store/cart/CartSlice';
import {Item} from '../../store/items/items.types';

const CartScreen = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: Item) => total + item.price,
    0,
  );

  const handleRemoveItem = (itemId: number) => {
    // dispatch(removeItemFromCart(itemId));
    dispatch(cartActions.removeItemFromCart(itemId));
  };

  const renderItem = ({item}: {item: Item}) => (
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
