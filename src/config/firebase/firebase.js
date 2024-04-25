import { auth } from "../auth/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInWithEmailAndPassword } from "firebase/auth";



  export async function loginUser(){
    // const auth = getAuth();
signInWithEmailAndPassword(auth, 'naseer4uplus@gmail.com', 'naseer819')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });


  }