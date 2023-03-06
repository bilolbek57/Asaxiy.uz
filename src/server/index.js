import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDaMtdpVHLYtftEw3uL42TI6askjKJZDBs",
  authDomain: "asaxiy-a70ba.firebaseapp.com",
  projectId: "asaxiy-a70ba",
  storageBucket: "asaxiy-a70ba.appspot.com",
  messagingSenderId: "79621727136",
  appId: "1:79621727136:web:0b262e8575a3cf6d257ac5",
  measurementId: "G-P506QX9W9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)