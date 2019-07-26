import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBGu0jW4TRo8SpKDXlp_8VkK844ik0A5U0",
    authDomain: "andrewlew1s.firebaseapp.com",
    databaseURL: "https://andrewlew1s.firebaseio.com",
    projectId: "andrewlew1s",
    storageBucket: "andrewlew1s.appspot.com",
    messagingSenderId: "350629244415",
    appId: "1:350629244415:web:41df9acf176759f3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;