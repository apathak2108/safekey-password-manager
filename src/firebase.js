import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHwQvHZqVDZMfotDpBww5MzWoRxqFKhEg",
  authDomain: "safekey-password-manager.firebaseapp.com",
  projectId: "safekey-password-manager",
  storageBucket: "safekey-password-manager.appspot.com",
  messagingSenderId: "363212108753",
  appId: "1:363212108753:web:ac92b3aeadb27a254666f0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
