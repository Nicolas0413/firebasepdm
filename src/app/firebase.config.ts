import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCT-a3cmlJ5duLu35S2LBSqaotjtq84kC0",
  authDomain: "projeto-pdm-5469c.firebaseapp.com",
  projectId: "projeto-pdm-5469c",
  storageBucket: "projeto-pdm-5469c.firebasestorage.app",
  messagingSenderId: "561827266064",
  appId: "1:561827266064:web:45ea17c955d32cd8c4d495"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
