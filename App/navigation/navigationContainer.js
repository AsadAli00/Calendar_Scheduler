import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import CalendarSchedulerScreen from './CalendarSchedulerScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { StatusBar } from 'react-native';

export default function Navigation_Container() {

  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1}}>
      <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Calendar Schedular') {
                iconName = focused ? 'calendar-outline' : 'calendar';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#61dafb',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar Schedular" component={CalendarSchedulerScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}