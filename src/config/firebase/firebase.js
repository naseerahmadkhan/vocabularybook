import { auth,db } from "../auth/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,updateDoc,collection,addDoc,getDocs,getDoc,arrayUnion } from "firebase/firestore"; 
import useStore from "../../store/store";





  export async function loginUser(){

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


  export async function addRecordInDB(obj) {
    try {
      // Create a reference to the document "vocablist" in the "vocab" collection
      const vocabListRef = doc(db, "vocab", "vocablist");
      
      // Update the existing document, adding the object to the "data" array
      await updateDoc(vocabListRef, {
          data: arrayUnion(obj)
      });

      console.log("Document successfully updated!");
      return "Successfully added";
  } catch (error) {
      console.error("Error updating document: ", error);
      throw new Error("Failed to add record");
  }
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

  
  export async function getAllRecord(){
const docRef = doc(db, "vocab", "vocablist");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("getting all data");
  try{
    const result = await docSnap.data().data
    console.log('res',result)
    return result
    // initializeItems(result)
  }catch(e){
      console.log(e)
  }finally{

    
  }
  
  
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


  }