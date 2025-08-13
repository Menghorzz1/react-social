import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCekRyxmtfFBCA71pTS3Dv8ZZ0s3y6VtwQ",
    authDomain: "react-firebase-project-d3729.firebaseapp.com",
    projectId: "react-firebase-project-d3729",
    storageBucket: "react-firebase-project-d3729.firebasestorage.app",
    messagingSenderId: "383226674768",
    appId: "1:383226674768:web:8d09fcfd3d8cd2b2b65b55",
    measurementId: "G-7J38BE37P3"
};


initializeApp(firebaseConfig);
const auth = getAuth();
export {auth}
