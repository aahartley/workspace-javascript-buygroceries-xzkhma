// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBoJ6-2VetXjIyotWfLsMCw6Vcd8dDKfqc",
  authDomain: "buygroceries-7fcb9.firebaseapp.com",
  databaseURL: "https://buygroceries-7fcb9.firebaseio.com",
  projectId: "buygroceries-7fcb9",
  storageBucket: "buygroceries-7fcb9.appspot.com",
  messagingSenderId: "345609131270",
  appId: "1:345609131270:web:894f01ad228a43c4d0ba87",
  measurementId: "G-BYXJRM5H7J"
};

firebase.initializeApp(firebaseConfig);



// Save the list to database

