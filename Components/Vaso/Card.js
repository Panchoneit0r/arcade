import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';


function generateRandomNumber(max, min){
        return Math.floor(Math.random()*(max-min)+min);
    }
  let random = generateRandomNumber(4,1);


function Card({id}) {
    const handleOnPress =()=> {
      const bola = id;
      if (bola === random){
        Alert.alert("Ganaste","Encontraste la bola felecidades!!!")
      }
      else{
         Alert.alert("Perdiste","No encontraste la bola...")
      }
      random = generateRandomNumber(4,1);
    }
    return (
        <View style={styles.root}>
            <TouchableOpacity onPress = {() => handleOnPress()}>
            <Image 
                style={styles.ver}
                source={require("../../assets/vaso.png")}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-around',
    },
    ver:{
        width: 100,
        height: 140,
        margin: 10
    }
})

export default Card;