import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>My name is Maradona :) </Text>
    //   <StatusBar style="auto" />
    // </View>

    <View style={{marginVertical:40}}>
      <Search/>

    </View>
  )
}
