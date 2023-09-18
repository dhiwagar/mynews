import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../themes/Index'
import { useNavigation } from '@react-navigation/native'

var {width,height}=Dimensions.get('window')
export default function Movielist({data,tittle}) {
    const navigation=useNavigation()
    const  moviename="Ant-Man and the Wasp: Quantumania"
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{tittle}</Text>
          <TouchableOpacity>
            <Text style={styles.text }>See All</Text>
       
            </TouchableOpacity>
      </View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
        {
            data.map((item,index)=>(
                <TouchableWithoutFeedback
                key={index}
                onPress={()=>navigation.navigate("Movie",item)}
                >
                    <View className="space-y-1 mr-4">
                        <Image  
                        source={require('../assets/images/moviePoster2.png')} 
                        className="rounded-3xl"
                         style={{width:width*0.33,height:height*0.22}}/>
                         <Text className="text-neutral-300 ml-1">
                            {moviename.length>14 ? moviename.slice(0,14)+"...":moviename}
                         </Text>
                    </View>
               
                </TouchableWithoutFeedback>

            ))
        }
         
      </ScrollView>
    </View>
  )
}