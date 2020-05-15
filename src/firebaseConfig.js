import firebase from 'firebase';

// copy/paste this from your firebase console
const config = {
  apiKey: "AIzaSyAYM1gtos8UGNmu2oc5AMpXEFsohiH9Cqs",
  authDomain: "hbnbraindr.firebaseapp.com",
  databaseURL: "https://hbnbraindr.firebaseio.com",
  projectId: "hbnbraindr",
  storageBucket: "hbnbraindr.appspot.com",
  messagingSenderId: "229562143310",
  appId: "1:229562143310:web:91837e8b12ffb23e0ce91f",
  measurementId: "G-X2NN6F7556"
};;

firebase.initializeApp(config);

export const db = firebase.database();

