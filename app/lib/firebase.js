// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvCJilzUeT2FTbkEQvq0H-e9o2BJMUUJ8",
  authDomain: "y-app-fc12d.firebaseapp.com",
  databaseURL: "https://y-app-fc12d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "y-app-fc12d",
  storageBucket: "y-app-fc12d.appspot.com",
  messagingSenderId: "658717475714",
  appId: "1:658717475714:web:95e76be26761b6e0ea859b",
  measurementId: "G-FSDL8809GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
