import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Item} from '../../store_legacy/items/types';
import {styles} from './ItemList.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemModal from './modal/ItemModal';
import {useAppDispatch} from '../../hooks/Redux';
import {addItemToCart} from '../../store_legacy/cart/actions';

interface ItemsListProps {
  items: Item[];
  error?: Error | null;
}

const ItemsList = ({items, error}: ItemsListProps) => {
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
    dispatch(addItemToCart(item));
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

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Oops! Something went wrong.</Text>
        <Text style={styles.errorMessage}>{error.message}</Text>
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
