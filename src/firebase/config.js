import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0K7kfg9x7i2eA2K2Uhqjlp5UXw6xAYjA",
    authDomain: "vue-blogs-system.firebaseapp.com",
    projectId: "vue-blogs-system",
    storageBucket: "vue-blogs-system.appspot.com",
    messagingSenderId: "81999527543",
    appId: "1:81999527543:web:7c54d77d0db6bd0f535072"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};