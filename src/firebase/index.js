// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASURERMENT_ID
    apiKey: "AIzaSyDfKqYmA_ILm-HJsfqmgqShrLFtRw8usg0",
    authDomain: "edu-ddi-2021a.firebaseapp.com",
    databaseURL: "https://edu-ddi-2021a-default-rtdb.firebaseio.com",
    projectId: "edu-ddi-2021a",
    storageBucket: "edu-ddi-2021a.appspot.com",
    messagingSenderId: "500902634772",
    appId: "1:500902634772:web:888d460bd0c50b4ad9ce01",
    measurementId: "G-6KZKK8G1JZ"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();
export const storage = app.storage();

