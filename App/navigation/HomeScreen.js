
import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native'




export default function HomeScreen() {


    return (
        <View style={styles.conatiner}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <Text style={styles.TextStyle}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignContent: 'center'
    },
    TextStyle: {
        textAlign: 'center'
    }
});


