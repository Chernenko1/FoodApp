import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HorizontalRule = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
};
