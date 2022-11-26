// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1latoA73YxuwOlxTtrwVybYiza2pXnjc",
  authDomain: "chat-fc85e.firebaseapp.com",
  projectId: "chat-fc85e",
  storageBucket: "chat-fc85e.appspot.com",
  messagingSenderId: "274281538393",
  appId: "1:274281538393:web:b00561f3445e3feaee2248",
  measurementId: "G-511VNZ37XC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
