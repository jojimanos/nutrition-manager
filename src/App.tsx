import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import LandingScreen from './screens/LandingScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';

export default function App() {

  const [user, setUser] = useState("")

  return (
  <>
  <RecoilRoot>
    {user === "" ? 
    <LandingScreen/>
     : <AuthenticationScreen/>}
  </RecoilRoot>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
