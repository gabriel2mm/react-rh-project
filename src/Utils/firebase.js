import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDNPkLuDei0-Zw6kQ4yOqKyamUI2v7XgZs",
  authDomain: "projeto-rh-9d55b.firebaseapp.com",
  databaseURL: "https://projeto-rh-9d55b.firebaseio.com",
  projectId: "projeto-rh-9d55b",
  storageBucket: "projeto-rh-9d55b.appspot.com",
  messagingSenderId: "128621950216",
  appId: "1:128621950216:web:10ced13f20bbd3ccae28bd",
  measurementId: "G-MQGPVV7R2X"
};
const firebaseImpl = firebase.initializeApp(config);
firebaseImpl.analytics();

export default firebaseImpl;