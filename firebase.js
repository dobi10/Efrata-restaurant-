// Firebase imports

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
getStorage 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// Your Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyDIzOEeU2Ig4_vIU15uPQ52fY-uuX8-sFM",

authDomain: "efrata-restaurant.firebaseapp.com",

projectId: "efrata-restaurant",

storageBucket: "efrata-restaurant.firebasestorage.app",

messagingSenderId: "846901802455",

appId: "1:846901802455:web:bd3dac687c96fedbdd8792"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Export Firebase services

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
