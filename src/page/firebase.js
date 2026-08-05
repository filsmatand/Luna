// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhqAYAXMq6y904kx_LEzplyk5BlOGmldo",
  authDomain: "luna-ecea0.firebaseapp.com",
  projectId: "luna-ecea0",
  storageBucket: "luna-ecea0.firebasestorage.app",
  messagingSenderId: "212754238794",
  appId: "1:212754238794:web:f9ea15daee8939bbb405b3",
  measurementId: "G-3K9CNXJ2J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);