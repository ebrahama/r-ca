import { initializeApp } from "firebase/app";
import { getstorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDy4d4HowKL7hv78OibimOlgx0_-ypJTsY",
  authDomain: "im-up-d4811.firebaseapp.com",
  projectId: "im-up-d4811",
  storageBucket: "im-up-d4811.appspot.com",
  messagingSenderId: "669939752871",
  appId: "1:669939752871:web:fed1cc657b579ea09e6082"
};

const app = initializeApp(firebaseConfig);
export const storage = getstorage(app) 
