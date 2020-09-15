import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoB1qTw689kCi8Fjg5EFnGHQwO1X849wM",
  authDomain: "clone-16f1d.firebaseapp.com",
  databaseURL: "https://clone-16f1d.firebaseio.com",
  projectId: "clone-16f1d",
  storageBucket: "clone-16f1d.appspot.com",
  messagingSenderId: "201988643716",
  appId: "1:201988643716:web:6bda323fe23135c67b5bd1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
