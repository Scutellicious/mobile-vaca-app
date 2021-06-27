import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const ViewMap: () => Node = Platform.select({
  ios: () => <Text>click here to bring up the map</Text>,
});

export default ViewMap;
