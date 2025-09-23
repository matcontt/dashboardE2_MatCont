import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps{
  onPress: () => void; //Metodo
  icon: string;//Cadena
  color?: string; // Color opcional para el ícono
  enlace?: string; //Cadena opcional
}

const IconButton = ({ onPress, icon, enlace, color }: IconButtonProps)=> {
  return (
    <Pressable
      onPress={onPress}
      style={{ marginRight: 16 }} 
    >
      <Ionicons name={icon as any} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton