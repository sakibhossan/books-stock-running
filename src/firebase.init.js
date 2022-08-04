// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWn_RGuJTfA0JZDcBZ6mfJ3zGbg9-0Moc",
  authDomain: "books-stock-running.firebaseapp.com",
  projectId: "books-stock-running",
  storageBucket: "books-stock-running.appspot.com",
  messagingSenderId: "931884032474",
  appId: "1:931884032474:web:df2ca95b1ef92ba37760e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;