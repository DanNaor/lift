// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBAcRj9r-i02hVAoMpaNcY5Iq1GKnDFhO8",

  authDomain: "lift-8f86f.firebaseapp.com",

  projectId: "lift-8f86f",

  storageBucket: "lift-8f86f.appspot.com",

  messagingSenderId: "7240578385",

  appId: "1:7240578385:web:a8466f575cd5eb24398f70",

  measurementId: "G-EMYJLNVNVZ"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);