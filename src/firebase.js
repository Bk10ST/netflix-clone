//step 69


import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvpvxXuZfbz2HLIsjwDDRpZD8_9fKxyuM",
    authDomain: "netflix-clone-f479e.firebaseapp.com",
    projectId: "netflix-clone-f479e",
    storageBucket: "netflix-clone-f479e.appspot.com",
    messagingSenderId: "313656139068",
    appId: "1:313656139068:web:3339a4f7c38f5ff950d239",
    measurementId: "G-BXVHQVLQ5R"
  };
// step 70
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;


  //step 71 got to signup