import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {StyleSheet} from 'react-native'
import Calendar_Agenda from './App/Components/Calendar-agenda/index.js'


export default function App() {
  return (
   <View style={{flex: 1}}>
     <Calendar_Agenda />
   </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
