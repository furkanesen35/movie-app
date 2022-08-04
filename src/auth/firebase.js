import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
 apiKey: "AIzaSyAVCVUi9HTtiRoQRSIM7sM6wKR7u-J9SQ0",
 authDomain: "movie-app-db78e.firebaseapp.com",
 projectId: "movie-app-db78e",
 storageBucket: "movie-app-db78e.appspot.com",
 messagingSenderId: "724432544842",
 appId: "1:724432544842:web:76e180de757a0f58db32b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const createUser = async(email,password,navigate) => {
 try {
  let userCredential = await createUserWithEmailAndPassword(auth, email, password)
  console.log(userCredential);
  navigate("/")
 } 
 catch (err) {
  console.log(err);
 }
}