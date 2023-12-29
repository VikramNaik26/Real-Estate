// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-ffbd0.firebaseapp.com',
  projectId: 'real-estate-ffbd0',
  storageBucket: 'real-estate-ffbd0.appspot.com',
  messagingSenderId: '16453984166',
  appId: '1:16453984166:web:5bb4c6c216fa6e1a813967',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
