// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkgpulYTt_ZMRQ9zRUq5BJX3fCAp3bagA",
  authDomain: "eecs493-final-project-a6184.firebaseapp.com",
  projectId: "eecs493-final-project-a6184",
  storageBucket: "eecs493-final-project-a6184.appspot.com",
  messagingSenderId: "596949176240",
  appId: "1:596949176240:web:c1eefa95ce519131995075",
  measurementId: "G-VMPEKZ8MW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)