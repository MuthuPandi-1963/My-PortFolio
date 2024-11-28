// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your Firebase project configuration
// require('dotenv').config()
const firebaseConfig = {
  apiKey: "AIzaSyBFR5tYdlLi8m59Pii1j3SAaYEK_iffsF4",
  authDomain: "prank-portflio.firebaseapp.com",
  projectId: "prank-portflio",
  storageBucket: "prank-portflio.appspot.com",
  messagingSenderId: "63540365628",
  appId: "1:63540365628:web:4c8063598dc5b913597639",
  measurementId: "G-6ESCNRZ19D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
