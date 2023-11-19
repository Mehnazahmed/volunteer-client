// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJqjk9a4udIxo1HArjbMwjBFOQlWiL2_A",
  authDomain: "volunteer-92a89.firebaseapp.com",
  projectId: "volunteer-92a89",
  storageBucket: "volunteer-92a89.appspot.com",
  messagingSenderId: "640013836555",
  appId: "1:640013836555:web:e900fe53d1e197bd2d020e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);