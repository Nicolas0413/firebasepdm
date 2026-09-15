import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHJr4CcR8S1atIZR6m9NJdhPY9aKx0q0U",
  authDomain: "fire-pdm.firebaseapp.com",
  projectId: "fire-pdm",
  storageBucket: "fire-pdm.firebasestorage.app",
  messagingSenderId: "879586098434",
  appId: "1:879586098434:web:aa40f28b275ccdd8e9961b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
