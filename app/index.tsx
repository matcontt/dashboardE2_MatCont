import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import { View } from "react-native";
import "../global.css";
export default function Index() {
  return (
    <View className="flex flex-col items-start bg-slate-500 w-screen h-screen">
      <ProfileDetails></ProfileDetails> 
      <MoreDetails></MoreDetails>
    </View>

  );
}
