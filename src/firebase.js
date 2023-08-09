// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5tZz7ykFqdTJESymSLTD0HufD3q6dLmo",
  authDomain: "stockify-925e4.firebaseapp.com",
  projectId: "stockify-925e4",
  storageBucket: "stockify-925e4.appspot.com",
  messagingSenderId: "411590351910",
  appId: "1:411590351910:web:7b7175d85d66c750b7dae7",
  measurementId: "G-PZY8B7X5CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
export default app;