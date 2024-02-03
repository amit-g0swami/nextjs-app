import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB44coHcxTAcAj0xMWRG6cYEObvEXYSoM4",
  authDomain: "auth-be79e.firebaseapp.com",
  projectId: "auth-be79e",
  storageBucket: "auth-be79e.appspot.com",
  messagingSenderId: "2324861621",
  appId: "1:2324861621:web:9e8fe087ffe7161d58e4fc",
  measurementId: "G-DDNQKK4RGL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
