// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBXvWIO_FL8GyyMJQv6FguYxL1AuDqlJvU",
    authDomain: "fb-clone-5ffa2.firebaseapp.com",
    projectId: "fb-clone-5ffa2",
    storageBucket: "fb-clone-5ffa2.appspot.com",
    messagingSenderId: "545288617460",
    appId: "1:545288617460:web:53a98fadf5ca1663514da1",
    measurementId: "G-NY5ZYWXY8B"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, GoogleAuthProvider};
export default db;