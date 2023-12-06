import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
firebase.initializeApp({
    apiKey: "AIzaSyDrw_3SMHqZI2QG5rJOoZhyoqEAelEWScs",
    authDomain: "noteapp-45d33.firebaseapp.com",
    databaseURL: "https://noteapp-45d33-default-rtdb.firebaseio.com",
    projectId: "noteapp-45d33",
    storageBucket: "noteapp-45d33.appspot.com",
    messagingSenderId: "451767340861",
    appId: "1:451767340861:web:7bc0552360119af6a93f54"
});
const FIREBASE = firebase;
export default FIREBASE;