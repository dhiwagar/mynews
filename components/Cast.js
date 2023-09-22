import { View, Text, ScrollView,   TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({cast,navigation}) {
  let personName="Keanu Reevs";
  let charactername="Jhon wick"
  return (
    <View className="my-6">

      <Text className="text-white text-lg mx-4 mb-5">Cast</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
        {
            cast && cast.map((person,index)=>(
                 
                    <TouchableOpacity
                    key={index}
                    className="mr-4 items-center"
                    onPress={()=>navigation.navigate('person',person)}
                    >
                       <View 
                       className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500"
                       >
                       <Image 
                      className="rounded-2xl h-24 w-24"
                      source={require('../assets/images/castImage1.png')}
                      />
                       </View>
                    

                     <Text className="text-white text-xs mt-1">
                       {
                        charactername.length>10 ?charactername.slice(0,10)+'...':charactername
                       }
                     </Text>
                     <Text className="text-neutral-400 text-xs mt-1">
                       {
                        personName.length>10 ?personName.slice(0,10)+'...':personName
                       }
                     </Text>
                    </TouchableOpacity>
                    

            ))
        }


      </ScrollView>
    </View>
  )
}