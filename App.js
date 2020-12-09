import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import Routes from '@app/routes';
import {name as appName} from './app.json';


export default function App() {  
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  }  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2B2D42" />
      <Routes /> 
    </>
  ); 
}
AppRegistry.registerComponent(appName, () => App);