import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon,  MagnifyingGlassIcon} from "react-native-heroicons/outline";
import { styles } from '../themes/Index';
import Trandingmovies from '../components/Trandingmovies';
import Movielist from '../components/Movielist';

export default function Home() {
  const [tranding,settranding]=useState([1,2,3])
  const [upcoming,setUpcoming]=useState([1,2,3])
  const [toprated,settoprated]=useState([1,2,3])
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mb-2">
     <StatusBar style="light"/>   
     <View className="flex-row justify-between items-center mx-4">
      <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
      <Text className="text-white text-3xl font-bold">
        <Text style={styles.text}>  M</Text>
      ovies
      </Text>
      <TouchableOpacity>
        <MagnifyingGlassIcon color="white" size={30} strokeWidth={2}/>
      </TouchableOpacity>
      </View> 
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
         <Trandingmovies tranding={tranding}/>
         <Movielist tittle="upcoming" data={upcoming}/>
         <Movielist tittle="Top Rated" data={toprated}/>
      </ScrollView>

    </View>
  )
}