import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './components/route/bottomNavigationRoute';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <BottomNavigation/>
    </NavigationContainer>
  );
}


