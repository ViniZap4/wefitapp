import {NavigationContainer} from "@react-navigation/native"
import { useContext } from "react"
import { UserBottomSeetContext } from "../context/UserBottomSeetContext"

import {StackRoutes} from "./stack.routes"

export default function Routes(){

  return(<>
    <NavigationContainer>
     <StackRoutes />
    </NavigationContainer>
  </>)
}