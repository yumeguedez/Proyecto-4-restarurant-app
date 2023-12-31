import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "proyecto-4-13b8d.firebaseapp.com",
  projectId: "proyecto-4-13b8d",
  storageBucket: "proyecto-4-13b8d.appspot.com",
  messagingSenderId: "469993379710",
  appId: "1:469993379710:web:cfaad7735b16403d48452f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
