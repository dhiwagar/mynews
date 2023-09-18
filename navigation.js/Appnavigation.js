import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../'
import { createStackNavigator } from '@react-navigation/stack';
export default function Appnavigation() {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Home" option={{headerShown:false}} component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}