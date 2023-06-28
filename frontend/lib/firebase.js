// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDee8mFqCRWJif590bGcAisxx1fNo6yV_8",
  authDomain: "tabernacle-school.firebaseapp.com",
  projectId: "tabernacle-school",
  storageBucket: "tabernacle-school.appspot.com",
  messagingSenderId: "1092571166157",
  appId: "1:1092571166157:web:b6d1aa31715ca0c1320084",
  measurementId: "G-Y5WB9LW0E7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
