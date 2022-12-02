import { createContext, ReactNode, useRef} from "react";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";
import UserBottomSheetContents from "../components/UserBottomSheet";



// tipo do context
type UserBottomSeetContextType = {
  OpenButtonSheet: () => void,
  UserBottomSheet: () => any,   
  CloseButtonSheet: () => any


}

// valor inicial
const InitialValues ={
  OpenButtonSheet: () => {},
  UserBottomSheet: () => (<></>),
  CloseButtonSheet: () => (<></>),
}

// 
export const UserBottomSeetContext = createContext<UserBottomSeetContextType>(InitialValues)

// Setting UserProviderContext types
type userProviderProps = {
  children: ReactNode
}

const UserBottomSeetContextProvider = ({children}: userProviderProps) => {
  
  function OpenButtonSheet(){
    modilizeRef.current?.open()
  }
  function CloseButtonSheet(){
    modilizeRef.current?.close()
  }
  const modilizeRef = useRef<Modalize>(null);

  const UserBottomSheet = () => {
    
    return(
        <Modalize ref={modilizeRef} snapPoint={180} adjustToContentHeight={true}>
          <UserBottomSheetContents />
        </Modalize>
    )
  }

  return(
    <UserBottomSeetContext.Provider 
      value={{
        OpenButtonSheet,
        UserBottomSheet,
        CloseButtonSheet
      }}
    >
      {children}
    </UserBottomSeetContext.Provider>
  )
}

export default UserBottomSeetContextProvider;
