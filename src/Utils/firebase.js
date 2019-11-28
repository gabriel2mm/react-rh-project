import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDn-swNY-wtvhkF-0ILaMZm5Y57EbRkcBs",
  authDomain: "rhproject-94ff0.firebaseapp.com",
  databaseURL: "https://rhproject-94ff0.firebaseio.com",
  projectId: "rhproject-94ff0",
  storageBucket: "rhproject-94ff0.appspot.com",
  messagingSenderId: "869599162334",
  appId: "1:869599162334:web:d17464ec0e59cbf6ac374f",
  measurementId: "G-PMMLF3480W"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();