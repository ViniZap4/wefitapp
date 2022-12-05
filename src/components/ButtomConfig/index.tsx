import { useContext } from "react";
import { Ionicons } from '@expo/vector-icons'; 


//contex
import { UserBottomSeetContext } from "../../context/UserBottomSeetContext";
import { ButtonSetting } from "./styles";

export default function ButtomConfig(){
  const {OpenButtonSheet} = useContext(UserBottomSeetContext)

  function OpenUserBottomSheet(){
    OpenButtonSheet()
  }

  return(
    <ButtonSetting onPress={OpenUserBottomSheet}>
      <Ionicons name="settings-sharp" size={27} color="black" />
    </ButtonSetting>
  )
}