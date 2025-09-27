import React from 'react';
import { Text } from 'react-native';

interface CustomTextProperties{
    value:string;
    variant?: "normal" | "title" | "subtitle" | "subtitle2";
}

const CustomText = ({value, variant="normal"}:CustomTextProperties) => {
  return (
      <Text className={selectVariant(variant)}>{value}</Text>
  )
}

export default CustomText

function selectVariant(variante:string){
  switch (variante) {
    case "title":
      return "text-3xl font-bold text-black"
    case "subtitle":
      return "text-2xl font-bold text-gray-500"
    case"subtitle2":
      return "text-xl font-bold text-gray-300"
    default:
      return "text-base font-normal text-gray-700"    
  }
}