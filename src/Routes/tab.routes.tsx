import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen} = createBottomTabNavigator()

//style

//assets 
import {AntDesign} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ButtomConfig from '../components/ButtomConfig';

//screens
import Home from "../screens/tabs/Home/index";
import Favorite from '../screens/tabs/Favorites';
import { FONT } from '../styles/components/Font';


export function TabRoutes(){
  return(
    <Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerTitle: "Wefit",
          tabBarLabelStyle:{
            fontFamily: FONT.FONT_FAMILY.ROBOTO_Medium
          },
          headerRight: (props) => (
            <ButtomConfig />
          )
        }}
      >

      <Screen
        name="Repository" 
        component={Home} 
        options={{
          tabBarLabel:"Repositório",
          tabBarIcon:({color, size}) =>(
            <AntDesign name="github" color={color} size={size} />
          )
        }}
      />
      <Screen
        name="Favorites" 
        component={Favorite} 
        options={{
          tabBarLabel:"Favoritos",
          tabBarIcon:({color, size}) =>(
            <MaterialIcons name="star" color={color} size={size} />
          )
        }}
      />

    </Navigator>
  )

}