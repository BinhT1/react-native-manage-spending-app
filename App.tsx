import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from './global/global';
import HomeNavigation from './navigation/homeNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeNavigation></HomeNavigation>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
