import {View, Text} from 'react-native';
import React, {useState,useEffect} from 'react';
import Appheader from './header/Appheader';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

import { loginUser } from './config/firebase/firebase';


  const Stack = createNativeStackNavigator();
export default function AppNavigator() {

  useEffect(()=>{
    console.log('app loading')
    loginUser();
  })
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{
    headerShown: true
  }}>
       <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          header: (props) => <Appheader />, // Pass your custom header component
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
