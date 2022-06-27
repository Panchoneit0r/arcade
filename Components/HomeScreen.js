import React from 'react';
import {StyleSheet,Button, View, Text,Image} from 'react-native';


function HomeScreen({navigation}) {
    return (
        <View style={styles.container} >
            <Image
            style={styles.image}
            source={require("../assets/arcade.jpg")}
            />
            <Text style={styles.text}>Maquinitas el pancho</Text>
            <Text style={styles.text}>Juega clasicos de ayer y hoy pero ahora en tu telefono</Text>
            <Button 
                title="Ir a los juegos"
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