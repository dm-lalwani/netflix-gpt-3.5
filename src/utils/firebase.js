// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWRg8xF3PUXJNJOuSgRWDgvWzuoy-vLPs",
  authDomain: "netflixgpt-de226.firebaseapp.com",
  projectId: "netflixgpt-de226",
  storageBucket: "netflixgpt-de226.firebasestorage.app",
  messagingSenderId: "967916919306",
  appId: "1:967916919306:web:0776ecdc1bf413ef829df3",
  measurementId: "G-5SQ5DY78CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
