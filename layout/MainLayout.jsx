import React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import FavouriteRecipeScreen from '../screens/FavouriteReciepScreen';
import EditRecipeScreen from '../screens/EditRecipeScreen';
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Recipe Lists') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Add Recipe') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Edit Recipe') {
              iconName = focused ? 'create' : 'create-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgb(237,26,36)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Recipe Lists" component={HomeScreen} />
        <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
        <Tab.Screen name="Favorites" component={FavouriteRecipeScreen} />
        <Tab.Screen name="Edit Recipe" component={EditRecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
