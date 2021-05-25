//import liraries
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}


// create a component
const Calendar_Agenda = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {
    return (<TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
      <Card>
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Paragraph>
              {item.name}
            </Paragraph>
            <Avatar.Text label="j" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>)
  }
  return (

    <View style={{ flex: 1, borderColor: 'red' }}>
      <View style={{}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'calender Scheduler', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};
//make this component available to the app
export default Calendar_Agenda;

// define your styles
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


