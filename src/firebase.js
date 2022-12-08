import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUsFOKcfq9fW9IssI-HccUEUqJ0bz6ZhE",
  authDomain: "fir-8ae77.firebaseapp.com",
  // databaseURL: "https://fir-8ae77.firebaseapp.com/",
  projectId: "fir-8ae77",
  storageBucket: "fir-8ae77.appspot.com",
  messagingSenderId: "402998583818",
  appId: "1:402998583818:web:a5a8ba5750eb92218c35f3",
  measurementId: "G-8V4ZDR2CSS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };