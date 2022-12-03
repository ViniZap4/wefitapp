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

export default function App() {

  const [fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })


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


