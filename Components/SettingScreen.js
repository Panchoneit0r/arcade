import React from 'react';
import {StyleSheet, Button, View, Text,Image} from 'react-native';

function SettingScreen({route, navigation}) {
    const {id, name ,description, image, stock} = route.params;
    navigation.setOptions({
        title: name,
       
        headerRight: () =>(
            <Button
            title="Buy"
            onPress={() =>{}}
            disabled={stock ===0}
            />
        ),
    });

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'}}>
            <Text>Detail Screen</Text>
            <Image 
                style={styles.ver}
                source={{uri: image}}
            />
            <Text>Producto: {id}</Text>
            <Text>{name}</Text>
            <Text>Description: {description}</Text>
        

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    },
    ver:{
        width: 160,
        height: 150,
    }
})

export default SettingScreen;