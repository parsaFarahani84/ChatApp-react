import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWRKVGi4FsAmvv4iuN5zsw1clnydeaq0",
  authDomain: "chat-dae15.firebaseapp.com",
  projectId: "chat-dae15",
  storageBucket: "chat-dae15.appspot.com",
  messagingSenderId: "301790703991",
  appId: "1:301790703991:web:d18535f9e18dc5789eb172",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
