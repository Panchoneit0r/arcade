import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';



function Box({ id, name ,description, image, }) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image 
                style={styles.ver}
                source={{uri: image}}
            />
            <Text style={styles.titulo}> {name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Button
                color="#455a64"
                title="Jugar"
                onPress={
                    () => navigation.navigate(`${id}`, {
                        id: id,
                        name: name,
                        description: description,
                        image: image,
                    })
                }
            />
        </View>
    );
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

export default Box;