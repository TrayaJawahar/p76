import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './screens/DailyPic';
import Home from './screens/Home';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
   <Stack.Screen name="Home" component={Home}/>
   <Stack.Screen name="DailyPic" component={DailyPic}/>
   <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
   <Stack.Screen name="StarMap" component={StarMap}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const Stack=createStackNavigator();
