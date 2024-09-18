// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Import the functions you need from the SDKs you need// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFdB5-coG9qa8WTeWMzWdlQUt372xFKQs",
    authDomain: "auralearningpath.firebaseapp.com",
    projectId: "auralearningpath",
    storageBucket: "auralearningpath.appspot.com",
    messagingSenderId: "372727522970",
    appId: "1:372727522970:web:5fba1570b4fe9b20896123"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
