import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'
import CustomText from "./CustomText"

const MoreDetails = () => {
  return (
    <View className="w-screen h-1/2 bg-gray-800 bottom-0 left-0 right-0 rounded-t-xl p-5">
      <CustomText variant="subtitle2" value="Skills"/>
    </View>
  )
}

export default MoreDetails