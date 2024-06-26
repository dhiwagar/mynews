import { View, Text,TouchableWithoutFeedback, Dimensions, Image  } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

var {width,height}=Dimensions.get('window')
export default function Trandingmovies({tranding}) {
  const navigation=useNavigation()
  const handleClick=(item)=>{
    navigation.navigate('Movie',item)
  }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Tranding</Text>
      <Carousel
       data={tranding}
       renderItem={({item})=><Moviecard item={item} handleClick={handleClick}/>}
       firstItem={1}
       inactiveSlideOpacity={0.60}
       sliderWidth={width}
       itemWidth={width*0.62}
      slideStyle={{display:"flex",alignItems:"center"}}
      />
    </View>
  )
}


const Moviecard=({item,handleClick})=>{
   return(
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
    <Image source={require('../assets/images/moviePoster1.png')} style={{width:width*0.6,height:height*0.4}} className="rounded-xl"/>
    </TouchableWithoutFeedback>
   )
}