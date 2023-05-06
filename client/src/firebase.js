// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBpljN3c7NcB_LqaH1eUKRyhEAmza94Za0',
	authDomain: 'makemytripclone.firebaseapp.com',
	projectId: 'makemytripclone',
	storageBucket: 'makemytripclone.appspot.com',
	messagingSenderId: '1062476185976',
	appId: '1:1062476185976:web:7d9486875c3d83d724c88d',
	measurementId: 'G-TTPC7VG57E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
