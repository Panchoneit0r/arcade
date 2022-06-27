import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert, Button} from 'react-native';


  function generateRandomNumber(max, min){
    return Math.floor(Math.random()*(max-min)+min);
  }
  let random = generateRandomNumber(101, 1);


  function GuessYourNumber ({route, navigation}) {
    const {name, countJ,} = route.params;
    navigation.setOptions({
    title: name,
  });
  const winAlert = (j,p) =>{
      Alert.alert(
          "Ganaste",
         `contador jugador: ${j}
          contador del rival: ${p}`,
        [
          {
          text: "Volver al inicio",
         onPress: () => navigation.navigate('Games'),
          }
        ]
      );
  }
   const loseAlert = (j,p) =>{
      Alert.alert(
          "Perdiste",
         `contador jugador: ${j}
          contador del rival: ${p}`,
        [
          {
          text: "Volver al inicio",
          onPress: () => navigation.navigate('Games'),
          }
        ]
      );
  }
   const drawAlert = (j,p) =>{
      Alert.alert(
          "Empataron",
         `contador jugador: ${j}
          contador del rival: ${p}`,
        [
          {
          text: "Volver al inicio",
          onPress: () => navigation.navigate('Games'),
          }
        ]
      );
  }
  const[countP, setCountP] = useState(0);
  const[mayor, setMayor] = useState(100);
  const[menor, setMenor] = useState(1);

  const muyAlto = () =>{
    setMayor(random);
    random = generateRandomNumber(mayor, menor);
    setCountP (countP +1);
  }
  const muyBajo = () =>{
    setMenor(random)
    random = generateRandomNumber(mayor, menor);
    setCountP (countP +1);
  }
  const pocoAlto = () =>{
    setMayor(random);
    setMenor(random-5)
    random = generateRandomNumber(mayor, menor);
    setCountP (countP +1);
  }
  const pocoBajo = () =>{
    setMayor(random + 5)
    setMenor(random)
    random = generateRandomNumber(mayor, menor);
    setCountP (countP +1);
  }
  const numeroEncuntrado = ()=>
  {
    if (countP > countJ){
      winAlert(countJ,countP);
    }
    else if(countP === countJ){
       drawAlert(countJ,countP);
    }
    else{
       loseAlert(countJ,countP);
    }
  }

    return (
        <View>
            <Text>Intentos del jugador: {countJ} </Text>
            <Text> Piensa un numero entre 1  y 100</Text> 
            <Text> Tu numero es {random}</Text> 

            <Button
            title="Muy alto"
            onPress={muyAlto}
            />
            <Button
            title="Muy bajo"
            onPress={muyBajo}
            />
            <Button
            title="Un poco alto"
            onPress={pocoAlto}
            />
            <Button
            title="Un poco bajo"
            onPress={pocoBajo}
            />
             <Button
            title="Lo encontraste"
            onPress= {numeroEncuntrado}
            />
       
        </View>
    )
  
}

export default GuessYourNumber;