// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDdamQZ199cFmgzQVgjmZ27yFMbG4HsUAA",
  authDomain: "ecoseren-cf4ea.firebaseapp.com",
  projectId: "ecoseren-cf4ea",
  storageBucket: "ecoseren-cf4ea.appspot.com",
  messagingSenderId: "558704240723",
  appId: "1:558704240723:web:dfeabb108f331736b3bea6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

