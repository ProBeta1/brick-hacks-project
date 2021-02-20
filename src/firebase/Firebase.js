import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeTm5AFCCTJF9BdJLVfuHQMDIfo1Q01eI",
  authDomain: "brick-hacks-c6239.firebaseapp.com",
  projectId: "brick-hacks-c6239",
  storageBucket: "brick-hacks-c6239.appspot.com",
  messagingSenderId: "728676660233",
  appId: "1:728676660233:web:54577f612a0f1fafee74d8"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
export const ft = firebase.firestore();

