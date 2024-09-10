import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {styles} from './CartScreen.styles';
import {useCartSlice} from '../../store/cart/CartSlice';

const CartScreen = () => {
  const {items, removeItemFromCart} = useCartSlice();

  const totalPrice = items.reduce(
    (total: number, item) => total + item.price,
    0,
  );

  const handleRemoveItem = (itemId: number) => {
    removeItemFromCart(itemId);
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
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
    </View>
  );
};

export default CartScreen;
