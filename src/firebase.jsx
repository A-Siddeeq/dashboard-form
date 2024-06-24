import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu5-FG5j3y2cXKKL_Med9nsy9pRv-bgAc",
  authDomain: "dashboard-form-a136c.firebaseapp.com",
  projectId: "dashboard-form-a136c",
  storageBucket: "dashboard-form-a136c.appspot.com",
  messagingSenderId: "459801651109",
  appId: "1:459801651109:web:561937605dac242906ea4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
