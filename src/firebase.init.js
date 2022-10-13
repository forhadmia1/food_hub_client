// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP0HYcQrFS8WOt7h8eLmf1pllw6I8TNS0",
    authDomain: "food-hub-db7a6.firebaseapp.com",
    projectId: "food-hub-db7a6",
    storageBucket: "food-hub-db7a6.appspot.com",
    messagingSenderId: "645258531833",
    appId: "1:645258531833:web:f6d2772113c65d6d5a2328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;