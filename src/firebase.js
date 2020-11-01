import firebase from './firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMx50VR6_xiphkHIhGEUTFiZ9lNbXd01A",
    authDomain: "fir-48843.firebaseapp.com",
    databaseURL: "https://fir-48843.firebaseio.com",
    projectId: "fir-48843",
    storageBucket: "fir-48843.appspot.com",
    messagingSenderId: "428705654539",
    appId: "1:428705654539:web:040dcd48e262989476a40e",
    measurementId: "G-KKCVTN2FQC"
});





const db = firebaseApp.firestore();

export default db;