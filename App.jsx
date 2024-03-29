/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';


import AppNavigator from './src/AppNavigator';
// import { translate } from '@vitalets/google-translate-api';
import translate from 'translate-google-api';
function App(){

  const [urdu,setUrdu] = useState("")
  

  // const transInurdu = async()=>{
  //   const text = await translate('Good morning, how are you', { to: 'ur' });
  //   console.log(text.text)
  //   setUrdu(text.text)
  // }

  // const transInurdu = async()=>{
  //   const result = await translate(`I'm fine.`, {
  //     tld: "com",
  //     to: "ur",
  //   });

  //   setUrdu(result)
  // }







  return (
    <AppNavigator/>
  );
}



export default App;
