import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiAtmTWvh2TvHn736sPi1hncIjB3HFUdo",
  authDomain: "challenge-ea8ea.firebaseapp.com",
  projectId: "challenge-ea8ea",
  storageBucket: "challenge-ea8ea.appspot.com",
  messagingSenderId: "747521478649",
  appId: "1:747521478649:web:5b67ac6ac4c35d61d9f728",
  measurementId: "G-83BW1R1CRQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
