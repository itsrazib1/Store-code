// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGdtUcXrDZkzh3umB89qilDrcejySMStA",
  authDomain: "rupsojja-toy-car-zone.firebaseapp.com",
  projectId: "rupsojja-toy-car-zone",
  storageBucket: "rupsojja-toy-car-zone.appspot.com",
  messagingSenderId: "357672079045",
  appId: "1:357672079045:web:ffacd9ba0a622e5595aaac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
