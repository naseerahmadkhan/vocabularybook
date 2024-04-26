import { auth,db } from "../auth/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,updateDoc,collection,addDoc } from "firebase/firestore"; 
import useStore from "../../store/store";


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


  export async function addRecordInDB(list) {
    // Create a reference to the document "vocablist" in the "vocab" collection
const vocabListRef = doc(db, "vocab", "vocablist");


// Update the existing document with the new data
return setDoc(vocabListRef, {data:list})
  .then(() => {
    console.log("Document successfully updated!");
    alert('successfully added');
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  });
}


  export async function updateRecordInDB(){
   
  
  // Create a reference to the document "vocablist" in the "vocab" collection
const vocabListRef = doc(db, "vocab", "vocablist");

// Define the data you want to add or update
const newData = {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
};

// Update the existing document with the new data
updateDoc(vocabListRef, newData)
  .then(() => {
    console.log("Document successfully updated!");
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  });
  }