import { initializeApp } from 'firebase/app';
import {createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile,} from 'firebase/auth';
import {toastErrorNotify,toastSuccessNotify,toastWarnNotify,} from '../helpers/ToastNotify';

const firebaseConfig = {
 apiKey: "AIzaSyAVCVUi9HTtiRoQRSIM7sM6wKR7u-J9SQ0",
 authDomain: "movie-app-db78e.firebaseapp.com",
 projectId: "movie-app-db78e",
 storageBucket: "movie-app-db78e.appspot.com",
 messagingSenderId: "724432544842",
 appId: "1:724432544842:web:76e180de757a0f58db32b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
 try {
  let userCredential = await createUserWithEmailAndPassword(
   auth,
   email,
   password
  );
  await updateProfile(auth.currentUser, {
   displayName: displayName,
  });
  toastSuccessNotify('Registered successfully!');
  navigate('/');
  console.log(userCredential);
 } catch (err) {
   toastErrorNotify(err.message);
 }
};

export const signIn = async (email, password, navigate) => {
 try {
  let userCredential = await signInWithEmailAndPassword( auth, email, password );
  navigate('/');
  toastSuccessNotify('Logged in successfully!');
  console.log(userCredential);
 } catch (err) {
   toastErrorNotify(err.message);
   console.log(err);
 }
};

export const userObserver = (setCurrentUser) => {
 onAuthStateChanged(auth, (user) => {
  if (user) {
   setCurrentUser(user);
  } else {
   setCurrentUser(false);
  }
 });
};

export const logOut = () => {
 signOut(auth);
};

export const signUpProvider = (navigate) => {
 const provider = new GoogleAuthProvider();
 signInWithPopup(auth, provider)
  .then((result) => {
   console.log(result);
   navigate('/');
   toastSuccessNotify('Logged out successfully!');
  })
  .catch((error) => {
   console.log(error);
  });
};

export const forgotPassword = (email) => {
 sendPasswordResetEmail(auth, email)
  .then(() => {
   toastWarnNotify('Please check your mail box!');
  })
  .catch((err) => {
   toastErrorNotify(err.message);
  });
};
