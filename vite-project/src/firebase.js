// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeEnIG_kYLR5DpP4dTRfV5JT3lZLJR2kg",
  authDomain: "firabasedata-5e994.firebaseapp.com",
  projectId: "firabasedata-5e994",
  storageBucket: "firabasedata-5e994.appspot.com",
  messagingSenderId: "608764259123",
  appId: "1:608764259123:web:4919c47bff273de0afec46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export{db};