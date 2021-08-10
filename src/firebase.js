//import firebase
import firebase from "firebase";



//firebase config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYjbp_Cc6IiuIuOWTfcBZoh4qvVUSFFfc",
    authDomain: "whatsapp-clone-b273b.firebaseapp.com",
    projectId: "whatsapp-clone-b273b",
    storageBucket: "whatsapp-clone-b273b.appspot.com",
    messagingSenderId: "234044705173",
    appId: "1:234044705173:web:d7d50677f980b585c6ce9c",
    measurementId: "G-J98YRRND0T"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();


  export {auth,provider} ;
  export default db;