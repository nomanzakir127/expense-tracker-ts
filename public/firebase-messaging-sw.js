importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-j5jhk2qfcBhmxBoo8CzcZjItCWlLPaE",
    authDomain: "expensetracker-c15a3.firebaseapp.com",
    projectId: "expensetracker-c15a3",
    storageBucket: "expensetracker-c15a3.appspot.com",
    messagingSenderId: "1034233312049",
    appId: "1:1034233312049:web:54314423af28cb3ad6f610",
    measurementId: "G-256E38BH8B"
  };


  firebase.initializeApp(firebaseConfig)
  firebase.messaging();