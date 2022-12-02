import { createContext, ReactNode, SetStateAction, useEffect, useState} from "react";



// tipo do context
type UserContextType = {
  username: string; setUsername: (newState: string) => void,
}

// valor inicial
const InitialValues ={
  username: "",setUsername: () => {},
}

// 
export const UserContext = createContext<UserContextType>(InitialValues)

// Setting UserProviderContext types
type userProviderProps = {
  children: ReactNode
}

const UserContextProvider = ({children}: userProviderProps) => {
  const  [username, setUsername] = useState(InitialValues.username);
  

  return(
    <UserContext.Provider 
      value={{
        username, setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
