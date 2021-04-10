import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
    apiKey: "AIzaSyDUvpUPdqPfTcDUe7_SvkYPvbxtxUhHLdg",
    authDomain: "todo-app-cd007.firebaseapp.com",
    projectId: "todo-app-cd007",
    storageBucket: "todo-app-cd007.appspot.com",
    messagingSenderId: "367451886489",
    appId: "1:367451886489:web:5e338b397e78ff96d07908",
    measurementId: "G-SKH2JNQC8J"
  
});
const db = firebaseApp.firebase();
export default db  ;