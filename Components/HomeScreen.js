
import React from 'react';
import {StyleSheet,Button, View, Text,Image} from 'react-native';


function HomeScreen({navigation}) {
    return (
        <View style={styles.container} >
            <Image
            style={styles.image}
            source={require("../assets/tienda.jpg")}
            />
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Ir a Detalle"
                onPress={() => navigation.navigate('Games')}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        
    },

    text: {
        marginBottom: 10,
    },
    image:{
        width: 360,
        height: 250,
    }
})

export default HomeScreen;