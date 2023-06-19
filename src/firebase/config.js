import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAXgRlD2yWdVVnCWtr55rJaSbGvBe1tElk",
  authDomain: "fir-cde63.firebaseapp.com",
  projectId: "fir-cde63",
  storageBucket: "fir-cde63.appspot.com",
  messagingSenderId: "181825169191",
  appId: "1:181825169191:web:dc245ace14be0ca1cf2b02",
  measurementId: "G-JRW2RQP169"
};


 export default  firebase.initializeApp(firebaseConfig)