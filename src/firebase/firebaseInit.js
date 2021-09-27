import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDie2t8n4-YFwW23xughYlbe3BUflngvQ",
    authDomain: "fireblogs-b2f46.firebaseapp.com",
    projectId: "fireblogs-b2f46",
    storageBucket: "fireblogs-b2f46.appspot.com",
    messagingSenderId: "1005582725750",
    appId: "1:1005582725750:web:ba531783d5689faa4b2557"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();