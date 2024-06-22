


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnX0RRDZaLnPkYJhcOssKeOMIdbomk4lQ",
  authDomain: "laundry-app-8d1df.firebaseapp.com",
  projectId: "laundry-app-8d1df",
  storageBucket: "laundry-app-8d1df.appspot.com",
  messagingSenderId: "57108387883",
  appId: "1:57108387883:web:ef1fc5238a2f6d4d96326e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};