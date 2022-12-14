// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAN2T9413cV94hKN348cTt-8V5jgAH5ZF8",
  authDomain: "doctors-web-portal-1a97a.firebaseapp.com",
  projectId: "doctors-web-portal-1a97a",
  storageBucket: "doctors-web-portal-1a97a.appspot.com",
  messagingSenderId: "428442518746",
  appId: "1:428442518746:web:6070e1e70e45c13c9411e3"


  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;