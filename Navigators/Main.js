import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsView} from '@/components';
import {HomeView} from '@/components';

const Tab = createBottomTabNavigator();
//this is the main page

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsView} />
      <Tab.Screen name="Home" component={HomeView} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
