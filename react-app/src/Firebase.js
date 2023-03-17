import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKPeNkLVFt9i6l4x78nMsHwqhbB9bSUDA",
  authDomain: "gfggithubauth.firebaseapp.com",
  projectId: "gfggithubauth",
  storageBucket: "gfggithubauth.appspot.com",
  messagingSenderId: "693496739747",
  appId: "1:693496739747:web:2c3d690c3dd3a726af4c16",
  measurementId: "G-RH9J70KHVK",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, db, provider };


