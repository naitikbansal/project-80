import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAhJMzmIk_mVMsM4mBlAmPi5baF9z0jSdY",
    authDomain: "barter-system-app-325ca.firebaseapp.com",
    projectId: "barter-system-app-325ca",
    storageBucket: "barter-system-app-325ca.appspot.com",
    messagingSenderId: "81522958537",
    appId: "1:81522958537:web:3d266920c3eb8a74ba6d18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();