// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9A78tzyN9kiVvMDl4Rl6WGC1oEbXA0Eg",
  authDomain: "auth-milom.firebaseapp.com",
  projectId: "auth-milom",
  storageBucket: "auth-milom.appspot.com",
  messagingSenderId: "566334829696",
  appId: "1:566334829696:web:4342d526fdeca9856ae265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;