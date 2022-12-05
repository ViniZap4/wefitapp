import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 


//contex
import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";

export default function ButtomConfig(){
  const {OpenButtonSheet} = useContext(UserBottomSeetContext)

  function OpenUserBottomSheet(){
    OpenButtonSheet()
  }

  return(
    <TouchableOpacity onPress={OpenUserBottomSheet}>
      <Ionicons name="settings-sharp" size={30} color="black" />
    </TouchableOpacity>
  )
}