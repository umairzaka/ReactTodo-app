import * as  firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUvpUPdqPfTcDUe7_SvkYPvbxtxUhHLdg",
    authDomain: "todo-app-cd007.firebaseapp.com",
    databaseURL: "https://todo-app-cd007-default-rtdb.firebaseio.com",
    projectId: "todo-app-cd007",
    storageBucket: "todo-app-cd007.appspot.com",
    messagingSenderId: "367451886489",
    appId: "1:367451886489:web:5e338b397e78ff96d07908",
    measurementId: "G-SKH2JNQC8J"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire  ;