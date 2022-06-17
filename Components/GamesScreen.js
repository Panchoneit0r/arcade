import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Box from './Box';
import Juegos from './Juegos';

function GamesScreen() {
    return (
        
        <View style={styles.root}>
            <ScrollView style={styles.margen}>
            <View style={styles.containerBox}>
                {
                    Juegos.map((Juegos, i) => (
                        <Box 
                            key={i}
                            id = {Juegos.id}
                            name = {Juegos.name}
                            description = {Juegos.description}    
                            image = {Juegos.image}
                        />
                    ))
                }
            </View>
            </ScrollView>
                   
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    margen:{
        marginBottom: 50
    }
})
export default GamesScreen;