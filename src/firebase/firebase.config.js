// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8uXFNPrVOo7sjhVQrW4o34FblNl3aQJc",
  authDomain: "glasses-authentication-7dad2.firebaseapp.com",
  projectId: "glasses-authentication-7dad2",
  storageBucket: "glasses-authentication-7dad2.appspot.com",
  messagingSenderId: "395142330747",
  appId: "1:395142330747:web:40e0f2c25dfdeb29ae65de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;