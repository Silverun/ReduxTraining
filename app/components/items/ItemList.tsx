import React, {useState} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {Item} from '../../store_legacy/items/types';
import {styles} from './ItemList.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemModal from './modal/ItemModal';
import {useAppDispatch} from '../../hooks/Redux';
import {cartActions} from '../../store/cart/CartSlice';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

interface ItemsListProps {
  items: Item[] | undefined;
  error?: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

const ItemsList = ({items, error, isLoading}: ItemsListProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleAddToCart = (item: Item) => {
    // dispatch(addItemToCart(item));
    dispatch(cartActions.addItemToCart(item));
    closeModal();
  };

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.card}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#020215" />
        <Text>Loading items</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
      />
      <ItemModal
        item={selectedItem}
        onAddToCart={handleAddToCart}
        onClose={closeModal}
        visible={modalVisible}
      />
    </View>
  );
};

export default ItemsList;
