// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLvujWY5hibC7pwgaFsyWTs09PWsX-dJQ",
  authDomain: "react-ecomm-app-f0fc4.firebaseapp.com",
  projectId: "react-ecomm-app-f0fc4",
  storageBucket: "react-ecomm-app-f0fc4.appspot.com",
  messagingSenderId: "925178854123",
  appId: "1:925178854123:web:75c04417b06eace51d1cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
