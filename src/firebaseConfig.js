// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3O4agLP-0XjSkKV9hY1jxpM4EAgKZuw8",
    authDomain: "proyecto-final-reactjs-b10ed.firebaseapp.com",
    projectId: "proyecto-final-reactjs-b10ed",
    storageBucket: "proyecto-final-reactjs-b10ed.appspot.com",
    messagingSenderId: "376721689545",
    appId: "1:376721689545:web:34a06f5f37da402f98f618"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);