import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider,updateProfile,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyAVCVUi9HTtiRoQRSIM7sM6wKR7u-J9SQ0",
 authDomain: "movie-app-db78e.firebaseapp.com",
 projectId: "movie-app-db78e",
 storageBucket: "movie-app-db78e.appspot.com",
 messagingSenderId: "724432544842",
 appId: "1:724432544842:web:76e180de757a0f58db32b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const createUser = async(email,password,navigate,displayName) => {
 try {
  let userCredential = await createUserWithEmailAndPassword(auth, email, password)
  console.log(userCredential);
  navigate("/")
  updateProfile(auth.currentUser, {
   displayName: displayName,
 })
 } 
 catch (err) {
  console.log(err);
 }
}

export const signIn = async(email,password,navigate) =>{
 try {
  let userCredential = await signInWithEmailAndPassword(auth, email, password)
  console.log(userCredential);
  navigate("/")
 } 
 catch (err) {
  console.log(err);
 }
}

export const userObserver = (setCurrentUser) => {
 onAuthStateChanged(auth, (user) => {
  if (user) {
   setCurrentUser(user)
  } else {
   setCurrentUser(false);
  }
 });
}

export const logOut = () => {
 signOut(auth)
}

export const signUpProvider = (navigate) => {
 const provider = new GoogleAuthProvider();
 signInWithPopup(auth, provider)
  .then((result) => {
   console.log(result);
   navigate("/")
  }).catch((error) => {
   console.log(error);
  });

}