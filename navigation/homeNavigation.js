import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home';
import Account from '../screen/account';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../global/global';
import Report from '../screen/report';
import Other from '../screen/other';
import Add from '../screen/add';

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'home') {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'account') {
            return <Ionicons name="wallet" size={size} color={color} />;
          } else if (route.name === 'report') {
            return <Ionicons name="analytics" size={size} color={color} />;
          } else if (route.name === 'other') {
            return <Ionicons name="grid" size={size} color={color} />;
          } else if (route.name === 'add') {
            return <Ionicons name="add-circle" size={46} color={color} />;
          }
        },

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarLabel: 'Tổng quan'}}></Tab.Screen>
      <Tab.Screen
        name="account"
        component={Account}
        options={{tabBarLabel: 'Tài khoản'}}></Tab.Screen>
      <Tab.Screen
        name="add"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="report"
        component={Report}
        options={{tabBarLabel: 'Báo cáo'}}></Tab.Screen>
      <Tab.Screen
        name="other"
        component={Other}
        options={{tabBarLabel: 'Khác'}}></Tab.Screen>
    </Tab.Navigator>
  );
}
