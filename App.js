import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Components/HomeScreen';
import GamesScreen from './Components/GamesScreen';
import SettingScreen from './Components/SettingScreen';
import GuessNumber from './Components/Guess/GuessNumber';
import GuessYourNumber from './Components/Guess/GuessYourNumber'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root (){
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Games" component={GamesScreen} />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="root" component={Root} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="1" component={GuessNumber} />
        <Stack.Screen name="Details" component={SettingScreen} />
        <Stack.Screen name="GuessYourNumber" component={GuessYourNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
