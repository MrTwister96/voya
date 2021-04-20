import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


// Initialize Firebase
var  firebaseConfig = {
  apiKey:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  projectId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appId:  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const tripsCollection = db.collection('trips')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  tripsCollection
}