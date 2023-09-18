import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, theme } from '../themes/Index';
var {width,height}=Dimensions.get('window')
export default function Moviescreen() {
  const {params:item}=useRoute();
  const  moviename="Ant-Man and the Wasp: Quantumania"
  const [favorite,setfavorite]=useState(false)
  const navigation=useNavigation();
  useEffect(()=>{

  },[item])
  return (
    <ScrollView
     contentContainerStyle={{paddingBottom:20}}
     className="flex-1 bg-neutral-900"
    >
    <View className="w-full">
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-10">
        <TouchableOpacity className="rounded-xl p-1" style={styles.background} onPress={()=>navigation.goBack()}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setfavorite(!favorite)}>
          <HeartIcon size={35} color={favorite?theme.background:"white"}/>
        </TouchableOpacity>
        

      </SafeAreaView >
        <View >
        <Image  
                        source={require('../assets/images/moviePoster2.png')} 
                  
                         style={{width,height:height*0.55}} className="mt-2 rounded-lg"/>
                         <LinearGradient
                            colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                            style={{width,height:height*0.40}}
                            start={{ x:0.5,y:0}}
                            end={{ x:0.5,y:1}}
                            className=" absolute bottom-0"
  />
                   
        </View>
    </View>
    <View style={{marginTop:-(height*0.09)}} className="space-y-3">
      <Text className="font-bold text-center text-3xl tracking-wider text-white px-2">
{
  moviename
}
      </Text>
      <Text className="text-neutral-400 text-center font-semibold text-base">
        Released . 2020 . 170 min
      </Text>

    </View>
    <View className="flex-row justify-center items-center mx-4 space-x-2">
    <Text className="text-neutral-400 text-center font-semibold text-base">
        Action .
      </Text>
      <Text className="text-neutral-400 text-center font-semibold text-base">
        Thrill .
      </Text>
      <Text className="text-neutral-400 text-center font-semibold text-base">
        Comedy .
      </Text>

    </View>
    <Text className="text-neutral-400 mx-4 tracking-wider mt-3">
       
    Super-Hero partners Scott Lang and Hope van Dyne  return to continue their adventures as Ant-Man and the Wasp. Together,  interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.
      </Text>
    </ScrollView>
  )
}