import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './ItemList.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemModal from './modal/ItemModal';
import {Item} from '../../store/items/items.types';
import useRootStore from '../../context/useStore';
import {observer} from 'mobx-react-lite';

interface ItemsListProps {
  items: Item[];
  error?: string | null;
  isLoading: boolean;
}

const ItemsList = observer(({items, error, isLoading}: ItemsListProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addItemToCart = useRootStore().cart.addItemToCart;

  useEffect(() => {
    console.log('List items: ', JSON.stringify(items));
  }, [items]);

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
});

export default ItemsList;
