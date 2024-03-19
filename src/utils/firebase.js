// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv9N-a-LTS5Q6DKn_xIoEzRZt7iREZCKI",
  authDomain: "netflixgpt-3501e.firebaseapp.com",
  projectId: "netflixgpt-3501e",
  storageBucket: "netflixgpt-3501e.appspot.com",
  messagingSenderId: "688234266658",
  appId: "1:688234266658:web:ec4d81ba619ba8f8d60a7b",
  measurementId: "G-WPFMZLS20G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();