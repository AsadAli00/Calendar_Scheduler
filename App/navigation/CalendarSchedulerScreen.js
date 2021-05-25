
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Calendar_Agenda from '../Components/Calendar-agenda/index.js'



export default function CalendarSchedulerScreen() {


    return (
        
        <View style={styles.conatiner}>
            <Calendar_Agenda />
         

        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
  });
