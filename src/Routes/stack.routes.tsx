import { createNativeStackNavigator } from "@react-navigation/native-stack";


const { Navigator, Screen} = createNativeStackNavigator()

//screens
import Details from "../screens/stack/Details";

export function StackRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: "black",
        }
      }}>
        <Screen
          name="Details"
          options={{
            title: "Detalhes"            
          }}
          component={Details}
        />
    </Navigator>
  )

}