import { StatusBar } from 'expo-status-bar';

// Estilo e Temas
import { ThemeProvider } from 'styled-components/native';
import UserBottomSeetContextProvider from './src/context/UserBottomSeetContext';
import UserContextProvider from './src/context/UserContext';
import Routes from './src/Routes';
import light from './src/styles/themes/light';

import { 
  useFonts,
  Inter_400Regular,
  Inter_700Bold
 } from '@expo-google-fonts/inter'

 import { 
  Roboto_500Medium,
  Roboto_400Regular
 } from '@expo-google-fonts/roboto'


import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs()

  const [fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  

  return (
    <UserContextProvider>
      <UserBottomSeetContextProvider>
        <ThemeProvider theme={light}>
          
          <StatusBar
            //barStyle='light-content'
            backgroundColor="transparent"
            translucent
          />
          <Routes /> 
        </ThemeProvider>
      </UserBottomSeetContextProvider>
    </UserContextProvider>
  );
}


