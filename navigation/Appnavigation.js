import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../screen/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Moviescreen from '../screen/Moviescreen';
export default function Appnavigation() {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="Movie" options={{headerShown:false}} component={Moviescreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}