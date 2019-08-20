import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7YVYGCdh1DDdDKABl6UajKmLFUINwBeQ",
    authDomain: "orators-app-refactored.firebaseapp.com",
    databaseURL: "https://orators-app-refactored.firebaseio.com",
    projectId: "orators-app-refactored",
    storageBucket: "orators-app-refactored.appspot.com",
    messagingSenderId: "594510966465",
    appId: "1:594510966465:web:696f15c317c8e469"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase