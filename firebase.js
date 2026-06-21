const firebaseConfig = {
  apiKey: "AIzaSyAVSQvJngUWq57Yor6layvm7oDvr7NWrpY",
  authDomain: "student-management-c6930.firebaseapp.com",
  projectId: "student-management-c6930",
  storageBucket: "student-management-c6930.firebasestorage.app",
  messagingSenderId: "497606983548",
  appId: "1:497606983548:web:190ac86c98a88a1fed2ef9"
};

firebase.initializeApp(firebaseConfig);

// 🔥 مهم‌ترین خط کل پروژه
window.db = firebase.firestore();

console.log("DB loaded:", window.db);