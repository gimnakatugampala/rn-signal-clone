import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home.js'

export default function App() {
  return (
    <View>
    <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});
