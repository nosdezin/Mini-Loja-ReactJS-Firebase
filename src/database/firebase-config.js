import { initializeApp } from "firebase/app";
import {getFirestore}  from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATFSk_7S39hBAaPgnkshMvHUltwpAix20",
    authDomain: "loja-reactjs.firebaseapp.com",
    projectId: "loja-reactjs",
    storageBucket: "loja-reactjs.appspot.com",
    messagingSenderId: "895890426348",
    appId: "1:895890426348:web:30400091b36035612658c9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)