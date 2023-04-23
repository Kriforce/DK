import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA7CCvQ2-Ws53RkIhZmbiAS1oeWzR6LOek",
    authDomain: "productapp-160eb.firebaseapp.com",
    databaseURL: "https://productapp-160eb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "productapp-160eb",
    storageBucket: "productapp-160eb.appspot.com",
    messagingSenderId: "109277856365",
    appId: "1:109277856365:web:85b945edaa7fb6c245f564" 
};

const app = getApps.length > 0 ? getApps() :initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };