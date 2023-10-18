// src/firebase.js
import {initializeApp} from "firebase/app";
import {firebase, getFirestore} from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy8wZ8Tz51ixjFCSoI2U5V4A5Rn_CnKkw",
  authDomain: "fir-table-e266c.firebaseapp.com",
  projectId: "fir-table-e266c",
  storageBucket: "fir-table-e266c.appspot.com",
  messagingSenderId: "938822524202",
  appId: "1:938822524202:web:6fb6b57b3fbc3d89f31253",
  measurementId: "G-Y9RS4RVE4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 


