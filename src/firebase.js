// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCoTXVpFvNCPUv5CDVSsshkaai94uS0amQ",
	authDomain: "twitter-clone-udemy-cd2e1.firebaseapp.com",
	projectId: "twitter-clone-udemy-cd2e1",
	storageBucket: "twitter-clone-udemy-cd2e1.appspot.com",
	messagingSenderId: "482872093690",
	appId: "1:482872093690:web:228de9294c5ea8463fd243",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
