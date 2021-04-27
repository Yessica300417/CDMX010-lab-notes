import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvBj8bbGSGjo11HIUT35YvCpNvZxywd8k",
  authDomain: "lab-notes-react.firebaseapp.com",
  projectId: "lab-notes-react",
  storageBucket: "lab-notes-react.appspot.com",
  messagingSenderId: "551812625736",
  appId: "1:551812625736:web:f323082bb70ebf1599af7d",
  measurementId: "G-EFJWF3S9XV"
};

const fb= firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()