import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const ViewRestaurants: () => Node = Platform.select({
  ios: () => <Text>View saved restaurants</Text>,
});

export default ViewRestaurants;
