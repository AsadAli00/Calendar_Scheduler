import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import Calendar_Agenda from './App/Components/Calendar-agenda/index.js'
import Navigation_Container from './App/navigation/navigationContainer'


export default function App() {
  return (
   <View style={{flex: 1}}>
     <Navigation_Container />
   </View>
  );
}


