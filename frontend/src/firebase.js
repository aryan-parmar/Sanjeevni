// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCauVt3vZkCvxyBx8YKEWbJjYD7qK5D43E",
  authDomain: "sanjeevni-4a919.firebaseapp.com",
  projectId: "sanjeevni-4a919",
  storageBucket: "sanjeevni-4a919.appspot.com",
  messagingSenderId: "977834659870",
  appId: "1:977834659870:web:2bea5b1ff0e2262058de0f",
  measurementId: "G-5GK9RW934G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);