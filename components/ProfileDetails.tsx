import "@/global.css"
import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from "./IconButton"
const ProfileDetails = () => {
  return (     
      <View className="flex justify-center items-center">
      <Image 
        source={require('../assets/images/fotoPerfil.jpg')} 
        className="max-h-24 max-w-24 rounded-full mb-4"
      />
      <Text className="text-2xl font-bold mb-2">Mateo Contreras</Text>
      <Text className="text-xl font-bold text-gray-400">Estudiante 3E2</Text> 
      <View className="flex-row mt-4">
        <IconButton icon="logo-instagram" onPress={() => console.log("Instagram")}></IconButton>
        <IconButton icon="logo-whatsapp" onPress={() => console.log("WhatsApp")}></IconButton>
        <IconButton icon="logo-facebook" onPress={() => console.log("Facebook")}></IconButton>
        <IconButton icon="logo-tiktok" onPress={() => console.log("Tiktok")}></IconButton>
      </View>
    </View>
 )
}

export default ProfileDetails