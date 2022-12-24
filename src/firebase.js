import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGHTqhkO93TeM4o8F1ZXy42FwRWjlDbtY",
  authDomain: "fir-3471e.firebaseapp.com",
  projectId: "fir-3471e",
  storageBucket: "fir-3471e.appspot.com",
  messagingSenderId: "782831907384",
  appId: "1:782831907384:web:66f75cfea86282b10d6ccd",
  measurementId: "G-XWNY54JKB4"
};
 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };