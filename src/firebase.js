import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4bfZMGB1f_gh0IrSe2_W7z6Bi6LDVv9c",
  authDomain: "fitlab-ef1a0.firebaseapp.com",
  projectId: "fitlab-ef1a0",
  storageBucket: "fitlab-ef1a0.appspot.com",
  messagingSenderId: "288352915047",
  appId: "1:288352915047:web:8b12f997ec1a739b78cec2",
  measurementId: "G-X9P0RV13YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);