import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { UserBottomSeetContext } from "../context/UserBottomSeetContext";


const { Navigator, Screen} = createNativeStackNavigator()

//screens
import Details from "../screens/stack/Details";
import { TabRoutes } from "./tab.routes";

export function StackRoutes(){
  const {UserBottomSheet} = useContext(UserBottomSeetContext)

  return(<>
    <Navigator
      screenOptions={{
        headerTintColor:"white",
        headerTitleAlign: "left",
        headerStyle:{
          backgroundColor: "black",
        }
      }}>

        <Screen 
          name="index" 
          options={{ 
            headerShown: false 
          }}
          component={TabRoutes} 
        />

        <Screen
          name="Details"
          options={{
            title: "Detalhes"            
          }}
          component={Details}
        />
    </Navigator>
    <UserBottomSheet />
</>
  )

}