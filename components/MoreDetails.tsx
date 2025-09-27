import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'
import CustomText from "./CustomText"
import IconButton from "./IconButton"
const MoreDetails = () => {
  return (
    <View className="w-screen h-1/2 bg-gray-800 bottom-0 left-0 right-0 rounded-t-xl p-5">
      <CustomText variant="subtitle2" value="Skills"/>
      <View className="flex-row mt-4 gap-4 justify-center items-center">
        <IconButton icon="logo-react" onPress={() => console.log("React")} variant="profile"></IconButton>
        <IconButton icon="logo-javascript" onPress={() => console.log("JavaScript")} variant="profile"></IconButton>
        <IconButton icon="java" onPress={() => console.log("Java")} variant="profile" iconFamily="FontAwesome5"></IconButton>
        <IconButton icon="logo-html5" onPress={() => console.log("HTML5")} variant="profile"></IconButton>
        <IconButton icon="adobe" onPress={() => console.log("Adobe")} variant="profile" iconFamily="Fontisto"></IconButton>
      </View>
      <View className="mt-4">
        <CustomText variant="subtitle2" value="Institución"/>
        <View className="flex-row mt-4 gap-4 justify-center items-center">
          <CustomText variant="colegio" value="Unidad Educativa Técnico Salesiano"/>
        </View>
      </View>
    </View>
  )
}

export default MoreDetails