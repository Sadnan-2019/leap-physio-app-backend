// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyA74NmbJ9861d9FNCjH2JvfXKxuRbJqYyU",
  //   authDomain: "leap-physio-auth.firebaseapp.com",
  //   projectId: "leap-physio-auth",
  //   storageBucket: "leap-physio-auth.appspot.com",
  //   messagingSenderId: "309943583542",
  //   appId: "1:309943583542:web:c78908aafd1893c0792997"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
