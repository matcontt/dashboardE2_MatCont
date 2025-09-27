import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'
import CustomText from "./CustomText"
import IconButton from "./IconButton"
const ProfileDetails = () => {
  return (     
      <View className="flex justify-start items-center mt-4 h-1/2 w-screen">
      <Image 
        source={require('../assets/images/fotoPerfil.jpg')} 
        className="h-40 w-40 rounded-full mb-6"
      />
      <CustomText variant="title" value="Mateo Contreras"></CustomText>
      <CustomText variant="subtitle" value="Estudiante 3E2"></CustomText>
      <View className="flex-row mt-4 gap-4">
        <IconButton icon="logo-instagram" onPress={() => console.log("Instagram")} variant="details-instagram"></IconButton>
        <IconButton icon="logo-whatsapp" onPress={() => console.log("WhatsApp")} variant="details-whatsapp"></IconButton>
        <IconButton icon="logo-facebook" onPress={() => console.log("Facebook")} variant="details-facebook"></IconButton>
        <IconButton icon="logo-tiktok" onPress={() => console.log("Tiktok")} variant="details-tiktok"></IconButton>
      </View>
    </View>
 )
}

export default ProfileDetails