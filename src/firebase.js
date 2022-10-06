import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfggZdO7BhOpRc-99uAwshFpcQVmwNNz8",
    authDomain: "superchat-48587.firebaseapp.com",
    projectId: "superchat-48587",
    storageBucket: "superchat-48587.appspot.com",
    messagingSenderId: "673513546885",
    appId: "1:673513546885:web:9508dbde50e8687838f5ec"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()