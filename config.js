import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6qiAOdwOLZX958yzajSnGYEd4U3EFHCo",
    authDomain: "homework93-70d18.firebaseapp.com",
    projectId: "homework93-70d18",
    storageBucket: "homework93-70d18.appspot.com",
    messagingSenderId: "576167352764",
    appId: "1:576167352764:web:6ae93447e2c2f99dbfb3b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();