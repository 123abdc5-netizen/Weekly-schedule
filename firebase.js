// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVSQvJngUWq57Yor6layvm7oDvr7NWrpY",
  authDomain: "student-management-c6930.firebaseapp.com",
  projectId: "student-management-c6930",
  storageBucket: "student-management-c6930.firebasestorage.app",
  messagingSenderId: "497606983548",
  appId: "1:497606983548:web:190ac86c98a88a1fed2ef9",
  measurementId: "G-TRKBWKD2W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);