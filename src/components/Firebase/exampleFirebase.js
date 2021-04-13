import firebase from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
<<<<<<< HEAD
//you will find your firebaseConfig once you successfully create your firebase console.
=======
//you will find your firebaseConfig once you successfully creat your firebase console.
>>>>>>> ac7caa0 (edit readme)
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
