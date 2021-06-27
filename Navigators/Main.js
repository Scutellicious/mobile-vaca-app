import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsView, ActivitiesView, HomeView} from '../components';

const Tab = createBottomTabNavigator();
//this is the main page

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsView} />
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Activities" component={ActivitiesView} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
