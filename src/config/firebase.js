// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgORti4IAJ57ZzOeR3aBUXRAvhSL0875k",
  authDomain: "tweetx-41af9.firebaseapp.com",
  projectId: "tweetx-41af9",
  storageBucket: "tweetx-41af9.appspot.com",
  messagingSenderId: "619176969155",
  appId: "1:619176969155:web:8fa0175521a7e20a263376",
  measurementId: "G-MNJMEVM7LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)