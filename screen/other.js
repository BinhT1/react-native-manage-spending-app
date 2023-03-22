import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import FocusStatusBar from '../components/share/focusStatusBar';

export default function Other() {
  return (
    <View>
      <FocusStatusBar
        backgroundColor="white"
        barStyle="dark-content"></FocusStatusBar>

      <Text>Other</Text>
    </View>
  );
}
