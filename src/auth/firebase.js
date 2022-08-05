import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider,updateProfile,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";

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
export const createUser = async(email,password,navigate,displayName) => {
 try {
  let userCredential = await createUserWithEmailAndPassword(auth, email, password)
  console.log(userCredential);
  navigate("/")
  updateProfile(auth.currentUser, {
   displayName: displayName,
 })
  // sessionStorage.setItem("user", JSON.stringify(userCredential.user))
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

export const signUpProvider = () => {
 const provider = new GoogleAuthProvider();
 signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}