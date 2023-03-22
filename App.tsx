import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from './global/global';
import HomeNavigation from './navigation/homeNavigation';

function App() {
  return (
    <NavigationContainer>
      <HomeNavigation></HomeNavigation>
    </NavigationContainer>
  );
}

export default App;
