// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyANQAAOpzEUKJFMZVOQjIthR2rw0MgyJTI",
  authDomain: "lilux-react-main.firebaseapp.com",
  projectId: "lilux-react-main",
  storageBucket: "lilux-react-main.appspot.com",
  messagingSenderId: "1027028128410",
  appId: "1:1027028128410:web:5057fb2b6aea37a4944523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;