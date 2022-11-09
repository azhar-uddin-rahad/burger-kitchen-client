// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMdgvcRFfzb6PmK0N_5l_P4CdL6-WPNhQ",
  authDomain: "berger-food-kitchen-client.firebaseapp.com",
  projectId: "berger-food-kitchen-client",
  storageBucket: "berger-food-kitchen-client.appspot.com",
  messagingSenderId: "719414843845",
  appId: "1:719414843845:web:db37dbe2510270799553ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;