import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA5qbGNla4cf_iUNnNOnsSqG6KpCCSRFi8",
    authDomain: "florestyc.firebaseapp.com",
    databaseURL: "https://florestyc.firebaseio.com",
    projectId: "florestyc",
    storageBucket: "florestyc.appspot.com",
    messagingSenderId: "1092659047016",
    appId: "1:1092659047016:web:5e2ed5fcb38a3a6664e9dd",
    measurementId: "G-F9N0ZXK7XX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const autenticacion = firebase.auth();
  export const firebaseDatabase = firebase.database();