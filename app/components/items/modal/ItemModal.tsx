import React from 'react';
import {View, Text, Image, Button, Modal} from 'react-native';
import {Item} from '../../../store_legacy/items/types';
import {styles} from './ItemModal.style';

interface ItemModalProps {
  visible: boolean;
  item: Item | null;
  onClose: () => void;
  onAddToCart: (item: Item) => void;
}

const ItemModal = ({visible, item, onClose, onAddToCart}: ItemModalProps) => {
  if (!item) {
    return null;
  }

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{uri: item.image}} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{item.title}</Text>
          <Text style={styles.modalDescription}>{item.description}</Text>
          <Text style={styles.modalPrice}>Price: ${item.price.toFixed(2)}</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="Add to Cart" onPress={() => onAddToCart(item)} />
            </View>
            <View style={styles.button}>
              <Button title="Close" onPress={onClose} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;
