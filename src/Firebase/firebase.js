import firebase from "firebase/app";
import 'firebase/firestore';

 
 
var firebaseConfig = {
    apiKey: "AIzaSyCakFx4Lr4OwghlyrSJOxZ1GabzYdAalNU",
    authDomain: "mascotas-marchant.firebaseapp.com",
    projectId: "mascotas-marchant",
    storageBucket: "mascotas-marchant.appspot.com",
    messagingSenderId: "608962096721",
    appId: "1:608962096721:web:6783e7f5b3c5b12da31270"
  };
  // Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);


export const dataBase = fb.firestore();