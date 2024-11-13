// screen/ProductListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../components/styles';

const ProductListScreen = ({ favorites, toggleFavorite }) => {
  const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' },
    { id: '4', name: 'Product 4' },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item)}>
        <Text style={styles.icon}>{favorites.some(prod => prod.id === item.id) ? '♥' : '♡'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductListScreen;
