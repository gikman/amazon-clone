import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX4aQY2xANEtcTpcsjwzwhP9g_NbjfWss",
    authDomain: "clone-1ac21.firebaseapp.com",
    databaseURL: "https://clone-1ac21.firebaseio.com",
    projectId: "clone-1ac21",
    storageBucket: "clone-1ac21.appspot.com",
    messagingSenderId: "609188559927",
    appId: "1:609188559927:web:ced91f8fe3da5a5dd013b2",
    measurementId: "G-YSR8F94GX1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };