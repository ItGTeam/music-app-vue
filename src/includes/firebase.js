import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqNensAf2df7xsEmxdNJm5tHcp1EGCmH8",
    authDomain: "music-app-d885f.firebaseapp.com",
    projectId: "music-app-d885f",
    storageBucket: "music-app-d885f.appspot.com",
    messagingSenderId: "902714950487",
    appId: "1:902714950487:web:03c0561d96d7f565307412"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection('songs');

export { auth, db, usersCollection,storage,songsCollection };
