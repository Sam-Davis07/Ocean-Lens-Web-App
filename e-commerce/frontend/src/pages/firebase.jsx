import { initializeApp } from "firebase/app";

// 🔴 Replace with YOUR Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyCLeqG24f74yRECl84ES98330rC3cwIp1g",
  authDomain: "starter-ca54e.firebaseapp.com",
  projectId: "starter-ca54e",
  storageBucket: "starter-ca54e.firebasestorage.app",
  messagingSenderId: "737938524589",
  appId: "1:737938524589:web:93400150bcff570896f924",
  measurementId: "G-97XP5B5VQL",
};

// ✅ Initialize Firebase ONCE
const app = initializeApp(firebaseConfig);

// ✅ Export once
export default app;
