// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cda13.firebaseapp.com",
  projectId: "mern-blog-cda13",
  storageBucket: "mern-blog-cda13.appspot.com",
  messagingSenderId: "584644828508",
  appId: "1:584644828508:web:192b864b2d58dace217599"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);