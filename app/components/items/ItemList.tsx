import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './ItemList.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemModal from './modal/ItemModal';
import {Item} from '../../store/items/items.types';
import {useCartSlice} from '../../store/cart/CartSlice';
import useItems from '../../hooks/useItems';

const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(1);

  const addItemToCart = useCartSlice(state => state.addItemToCart);

  const {error, items, isLoading, totalStoreItems} = useItems(page);

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleAddToCart = (item: Item) => {
    addItemToCart(item);
    closeModal();
  };

  const getNextItemsPage = () => {
    if (isLoading) return;
    if (items.length >= totalStoreItems) {
      console.log('No more items to get');
      return;
    }
    setPage(page => page + 1);
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

  const loading = (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#020215" />
      <Text>Loading items</Text>
    </View>
  );

  if (isLoading && page === 1) {
    return loading;
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
        onEndReached={getNextItemsPage}
        // onEndReachedThreshold={0.2}
        ListFooterComponent={isLoading ? loading : null}
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
