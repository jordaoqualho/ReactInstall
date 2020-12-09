import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { AppLoading } from 'expo';
import Routes from '@app/routes';
import {name as appName} from './app.json';


export default function App() {  
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  }  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#EDF2F4" />
      <Routes /> 
    </>
  ); 
}
AppRegistry.registerComponent(appName, () => App);