// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUufaL75htzvkTXntIjfO9c34HTZxKHGY",
  authDomain: "export-import-service.firebaseapp.com",
  projectId: "export-import-service",
  storageBucket: "export-import-service.firebasestorage.app",
  messagingSenderId: "59476061795",
  appId: "1:59476061795:web:899001cb2a6c4b66505256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);