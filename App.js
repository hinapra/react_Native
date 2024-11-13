// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from './screen/ProductListScreen';
import FavoritesScreen from './screen/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'; // Make sure Ionicons is installed

const Tab = createBottomTabNavigator();

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    if (favorites.some(item => item.id === product.id)) {
      setFavorites(favorites.filter(item => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'ProductList') {
              iconName = 'list-outline'; // Valid Ionicon name
            } else if (route.name === 'Favorites') {
              iconName = 'heart-outline'; // Valid Ionicon name
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="ProductList">
          {props => (
            <ProductListScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Favorites">
          {props => (
            <FavoritesScreen {...props} favorites={favorites} toggleFavorite={toggleFavorite} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
