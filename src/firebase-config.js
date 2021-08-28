import { initializeApp } from 'firebase/app';

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
    apiKey: "AIzaSyATOElfQsCFUS4YVWcfpPmYD6feuXoCDoo",
    authDomain: "kolhapuriganpati.firebaseapp.com",
    projectId: "kolhapuriganpati",
    storageBucket: "kolhapuriganpati.appspot.com",
    messagingSenderId: "441102419006",
    appId: "1:441102419006:web:8d3126aa46964db1c47d6f",
    measurementId: "G-RCERM4M6Z8",
    databaseURL: "https://kolhapuriganpati-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}

