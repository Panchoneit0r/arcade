import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';
import Vasos from './Vasos';
import Card from './Card';


function Vaso({route, navigation}) {
    const { name ,} = route.params;      
      navigation.setOptions({
      title: name,
    });
 
  return (
    <View>
    <Text> "Encuntra la bola en uno de estos vasos" </Text>
      <View style={styles.containerCard}>
      {
        Vasos.map((Vasos, i)=>(
          <Card
          key={i}
          id={Vasos.id}
          />
        ))
      }
      </View>
    </View>
  )
}

export default Vaso;

const styles = StyleSheet.create({
 containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})