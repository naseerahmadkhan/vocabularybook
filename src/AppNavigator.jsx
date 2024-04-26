import {View, Text} from 'react-native';
import React, {useState,useEffect} from 'react';
import Appheader from './header/Appheader';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import useStore from './store/store';
import { loginUser,addRecordInDB,updateRecordInDB,getAllRecord } from './config/firebase/firebase';


  const Stack = createNativeStackNavigator();
export default function AppNavigator() {

  const {initializeItems,items} = useStore()

  async function getData(){
    console.log('data in app nav')
    try{
      let result = await getAllRecord()
      initializeItems(result)
    }catch(e){
  console.log(">>>",e)
}finally{
}
    
  }

  useEffect(()=>{
    console.log('app loading')
    getData();
    // loginUser();
    // addRecordInDB();
  },[])
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
