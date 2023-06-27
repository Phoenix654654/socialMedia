// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOAPjc71zMvcwghvf20Rkx3abnC41vCJ8",
  authDomain: "react-course-project-7b382.firebaseapp.com",
  projectId: "react-course-project-7b382",
  storageBucket: "react-course-project-7b382.appspot.com",
  messagingSenderId: "538941131045",
  appId: "1:538941131045:web:ffa7d03a38a493448e72cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);