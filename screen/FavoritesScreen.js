// screen/FavoritesScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../components/styles';

const FavoritesScreen = ({ favorites, toggleFavorite }) => {
  const renderFavorite = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item)}>
        <Text style={styles.icon}>♥</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
