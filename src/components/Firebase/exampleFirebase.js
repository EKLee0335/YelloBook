import firebase from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//you will find your firebaseConfig once you successfully created your firebase console.
const firebaseConfig = {
    apiKey: "........",
    authDomain: "........",
    projectId: "........",
    storageBucket: "..........",
    messagingSenderId: "......",
    appId: ".........",
    measurementId: "........."
  };

const database = firebase.initializeApp(firebaseConfig)
export default database; 