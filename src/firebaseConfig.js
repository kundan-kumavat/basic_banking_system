// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWEx9IdBnAMJMpFpH_bMeDVOGjOYQeNN8",
  authDomain: "banking-system-63a6f.firebaseapp.com",
  projectId: "banking-system-63a6f",
  storageBucket: "banking-system-63a6f.appspot.com",
  messagingSenderId: "390661481967",
  appId: "1:390661481967:web:803c44f2744cd83eb9421a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);