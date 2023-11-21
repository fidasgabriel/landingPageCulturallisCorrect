import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAaf8hN2DR5OhStp0_N7RSgej28kb1s2K0",

  authDomain: "landingpageculturallis.firebaseapp.com",

  databaseURL: "https://landingpageculturallis-default-rtdb.firebaseio.com",

  projectId: "landingpageculturallis",

  storageBucket: "landingpageculturallis.appspot.com",

  messagingSenderId: "592974573873",
  
  appId: "1:592974573873:web:96bbcf95add9fb85a2c010"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
