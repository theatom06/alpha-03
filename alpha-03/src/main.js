import './style.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCPrSXI8MWTndkJTAuhPlUVGva6iuyTeL0",
  authDomain: "pr0long.firebaseapp.com",
  databaseURL: "https://pr0long-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pr0long",
  storageBucket: "pr0long.appspot.com",
  messagingSenderId: "384565321738",
  appId: "1:384565321738:web:24ceb0d58a8687bf603ff3",
  measurementId: "G-J2MCP8DPKN"
};

const app = initializeApp(firebaseConfig);

