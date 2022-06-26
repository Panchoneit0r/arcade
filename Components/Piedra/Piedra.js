import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

 function Piedra (){
    const[count, setCount] = useState(0);
    const handleOnPress = ()=> {
        setCount(count + 1); 
    }

    return (
      <View>
        <Text>Piedra</Text>
        <Text> a = {count}</Text>
        <TouchableOpacity onPress={() => handleOnPress()}>
        <Image 
                 style={styles.ver}
                source={{uri: "https://img2.freepng.es/20180623/wcr/kisspng-encapsulated-postscript-5b2e9bf180f8d8.7780342015297812335283.jpg"}}
                
            />
            </TouchableOpacity>
            <Button title="Adivina" onPress={handleOnPress}/>
      </View>

    )
}
const styles = StyleSheet.create({
    root: {
        width: 160,
        height: 280,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        
    },
    titulo:{fontWeight: 'bold',},
    text:{ textAlign: 'center'},
    ver:{
        width: 158,
        height: 150,
        bottom: 4,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    }
})

export default Piedra;