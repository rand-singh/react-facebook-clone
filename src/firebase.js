import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDQP8ZwXKjlj2XhB64B8eEJbFB2O6wERHU",
    authDomain: "react-facebook-clone-9b50a.firebaseapp.com",
    projectId: "react-facebook-clone-9b50a",
    storageBucket: "react-facebook-clone-9b50a.appspot.com",
    messagingSenderId: "793482965739",
    appId: "1:793482965739:web:ed6d5df4274134379b04ae"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;