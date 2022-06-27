import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

function generateRandomNumber(max, min){
        return Math.floor(Math.random()*(max-min)+min);
    }
function mostarEleccion(eleccion){
    if(eleccion === 1){ return 'https://media.ambito.com/p/39342badc13b5922ba51a45eccd00da4/adjuntos/239/imagenes/039/282/0039282575/criptorocktwitterjpg.jpg?0000-00-00-00-00-00'}
    else if(eleccion === 2){return 'https://cdn5.dibujos.net/dibujos/pintados/2011008/c5a87d331b7b09189cd6d619cd75cb1c.png'}
    else if(eleccion === 3){return 'https://i.pinimg.com/736x/8b/33/9a/8b339a797b61a8656c93fe98832ba852.jpg'}
}

let random = 0;
function Piedra ({route, navigation}){
    const { name ,} = route.params;      
        navigation.setOptions({
        title: name,
    });
    const winAlert = () =>{
    Alert.alert(
      "Ganaste",
      "Felicidades ganaste el 2 de 3 !!!",
      [
        {
          text: "Volver al inicio",
          onPress: () => navigation.goBack(),
        }
      ]
    );
    random = 0;
    }
    const loseAlert = () => {
    Alert.alert(
      "Perdiste",
      "Lo lamento Perdiste el 2 de 3...",
      [
        {
          text: "Volver al inicio",
          onPress: () => navigation.goBack(),
        }
      ]
    );
    random = 0;
    }
    const[countJ, setCountJ] = useState(0);
    const[countP, setCountP] = useState(0);
    const[eleccion, setEleccion] = useState(0);
    const[mensaje, setMensaje] = useState("");
    if(countJ === 2){winAlert()}
    if(countP === 2){loseAlert()}
    const handleOnPiedra = ()=> {
        random = generateRandomNumber(4,1);
        setEleccion(1);
        if (random === 1){
            setMensaje("Ronda empatada")
        }
        else if(random === 2){
            setCountP(countP +1);
            setMensaje("Ronda perdida")
        }
        else{
            setCountJ (countJ + 1);
            setMensaje("Ronda ganada")
        }
        
    }

    const handleOnPapel = ()=> {
        random = generateRandomNumber(4,1);
        setEleccion(2);
        if (random === 1){
            setCountJ (countJ + 1);
            setMensaje("Ronda ganada")
        }
        else if(random === 2){
            setMensaje("Ronda empatada")
        }
        else{
            setCountP(countP +1);
            setMensaje("Ronda perdida")
        }
    }

    const handleOnTijeras = ()=> {
        random = generateRandomNumber(4,1);
        setEleccion(3);
        if (random === 1){
            setCountP(countP +1);
            setMensaje("Ronda perdida")
        }
        else if(random === 2){
            setCountJ (countJ + 1);
            setMensaje("Ronda ganada")
        }
        else{
            setMensaje("Ronda empatada")
        }
    }

    return (
      <View style={styles.root}>
        <Text>Piedra, Papel o Tijeras </Text>
        <View  style={styles.containerOp}>
            <TouchableOpacity onPress={() => handleOnPiedra()} name = "Piedra">
                <Image 
                style={styles.ver}
                source={{uri: 'https://media.ambito.com/p/39342badc13b5922ba51a45eccd00da4/adjuntos/239/imagenes/039/282/0039282575/criptorocktwitterjpg.jpg?0000-00-00-00-00-00'}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOnPapel()}>
                <Image 
                style={styles.ver}
                source={{uri: 'https://cdn5.dibujos.net/dibujos/pintados/2011008/c5a87d331b7b09189cd6d619cd75cb1c.png'}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOnTijeras()}>
                <Image 
                style={styles.ver}
                source={{uri: 'https://i.pinimg.com/736x/8b/33/9a/8b339a797b61a8656c93fe98832ba852.jpg'}}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.resultados}>  
            <View style={styles.r}>
            <Text>Eleccion del jugador</Text>
            <Image 
            style={styles.ver}
            source={{uri: mostarEleccion(eleccion)}}
            />
            <Text> Puntos del jugador: {countJ}  </Text>
        </View>    
        <View style={styles.r}>
          <Text>Eleccion del oponente</Text>
          <Image 
            style={styles.ver}
            source={{uri: mostarEleccion(random)}}
          />
          <Text> Puntos del oponente: {countP}  </Text>
        </View>
        </View>
        <Text> {mensaje}  </Text>
      </View>

    )
}
const styles = StyleSheet.create({
    ver:{
        width: 100,
        height: 100,
        margin: 5,
    },
    containerOp: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
      resultados: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    r: {
        flexDirection: 'column',
    }
})

export default Piedra;