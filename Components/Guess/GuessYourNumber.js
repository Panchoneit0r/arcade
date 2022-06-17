import React, {useState} from 'react';
import {StyleSheet,View,Button,TextInput,Text, } from 'react-native';

    function GuessYourNumber ({route, navigation}) {
        const {name, countP,} = route.params;
        navigation.setOptions({
        title: name,
    });

    function generateRandomNumber(max, min){
        return Math.floor(Math.random()*(max-min)+min);
    }
    let random = generateRandomNumber(101, 1);

    return (
        <View>
            <Text>Intentos del jugador: {countP}</Text>

            <Text> Tu numero es {random}</Text> 

         
        </View>
    )
  
}

export default GuessYourNumber;