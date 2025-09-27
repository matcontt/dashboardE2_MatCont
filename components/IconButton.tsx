import { Pressable } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

interface IconButtonProps {
  onPress: () => void;
  icon: string;
  variant?: "profile" | "details-instagram" | "details-whatsapp" | "details-facebook" | "details-tiktok";
  iconFamily?: "Ionicons" | "FontAwesome" | "AntDesign" | "Fontisto" | "FontAwesome5";
}

const IconButton = ({ onPress, icon, variant = "profile", iconFamily = 'Ionicons' }: IconButtonProps) => {
  const { buttonClass, iconSize, iconColor } = selectVariant(variant);

  const renderIcon = () => {
    switch (iconFamily) {
      case 'FontAwesome':
        return <FontAwesome name={icon as any} size={iconSize} color={iconColor} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={icon as any} size={iconSize} color={iconColor} />;
      case 'AntDesign':
        return <AntDesign name={icon as any} size={iconSize} color={iconColor} />;
      case 'Fontisto':
        return <Fontisto name={icon as any} size={iconSize} color={iconColor} />;
      case 'Ionicons':
      default:
        return <Ionicons name={icon as any} size={iconSize} color={iconColor} />;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      className={buttonClass}
    >
      {renderIcon()}
    </Pressable>
  );
};

export default IconButton;

function selectVariant(variant: string) {
  let buttonClass = '';
  let iconSize = 24;
  let iconColor = 'black';

  switch (variant) {
    case "profile":
      buttonClass = 'rounded-xl p-2 shadow-md bg-white border border-gray-200';
      iconSize = 22;
      break;
    case "details-instagram":
      buttonClass = 'rounded-lg p-1 shadow-lg shadow-pink-500/50 bg-pink-500';
      iconSize = 36;
      iconColor = 'white';
      break;
    case "details-whatsapp":
      buttonClass = 'rounded-lg p-1 shadow-lg shadow-green-500/50 bg-green-500';
      iconSize = 36;
      iconColor = 'white';
      break;
    case "details-facebook":
      buttonClass = 'rounded-lg p-1 shadow-lg shadow-blue-500/50 bg-blue-500';
      iconSize = 36;
      iconColor = 'white';
      break;
    case "details-tiktok":
      buttonClass = 'rounded-lg p-1 shadow-lg shadow-neutral-500/50 bg-neutral-900';
      iconSize = 36;
      iconColor = 'white';
      break;
    default:
      buttonClass = 'rounded-xl p-3 border-b-4 border-r-2 border-stone-500';
      break;
  }

  return { buttonClass, iconSize, iconColor };
}