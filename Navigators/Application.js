import 'react-native-gesture-handler';
import React, {useEffect, useState, FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { IndexStartupContainer } from '@/Containers'
// import { useSelector } from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
// import { navigationRef } from '@/Navigators/Root'
import {SafeAreaView, StatusBar} from 'react-native';
import {MainNavigator} from './';
// import { useTheme } from '@/Theme'
// import { StartupState } from '@/Store/Startup'

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator headerMode={'float'}>
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
