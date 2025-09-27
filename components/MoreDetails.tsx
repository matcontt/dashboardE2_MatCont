import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'
import CustomText from "./CustomText"
import IconButton from "./IconButton"
const MoreDetails = () => {
  return (
    <View className="w-screen h-1/2 bg-gray-800 bottom-0 left-0 right-0 rounded-t-xl p-5">
      <CustomText variant="subtitle2" value="Skills"/>
      <View className="flex-row mt-4 gap-3 justify-center items-center">
        <IconButton icon="logo-instagram" onPress={() => console.log("Instagram")} color="pink"></IconButton>
        <IconButton icon="logo-whatsapp" onPress={() => console.log("WhatsApp")} color="green"></IconButton>
        <IconButton icon="logo-facebook" onPress={() => console.log("Facebook")} color="blue"></IconButton>
        <IconButton icon="logo-tiktok" onPress={() => console.log("Tiktok")} color="black"></IconButton>
      </View>
    </View>
  )
}

export default MoreDetails