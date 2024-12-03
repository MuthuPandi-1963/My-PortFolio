import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDiCKn7e20jYKpVwMMXUobt761MpNp5tH4",
  authDomain: "dummy-59bd8.firebaseapp.com",
  projectId: "dummy-59bd8",
  storageBucket: "dummy-59bd8.firebasestorage.app",
  messagingSenderId: "229376139539",
  appId: "1:229376139539:web:f7e4bfb6098a6db7643ae6"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db =getFirestore(app)

export { storage,db };