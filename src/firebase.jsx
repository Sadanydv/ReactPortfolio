import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvxsI2Pm8XTQKcEEyHUu7PLqG6A9WRn7s",
  authDomain: "sadan-portfolio.firebaseapp.com",
  projectId: "sadan-portfolio",
  storageBucket: "sadan-portfolio.appspot.com",
  messagingSenderId: "613945158019",
  appId: "1:613945158019:web:ea1d752b4814d07456aeb6"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore();