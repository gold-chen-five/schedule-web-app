import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMiGCykLQaRPp4JHuN2e8Rw_tq-rRP34k",
  authDomain: "schedule-web-app-493ed.firebaseapp.com",
  projectId: "schedule-web-app-493ed",
  storageBucket: "schedule-web-app-493ed.appspot.com",
  messagingSenderId: "863835816058",
  appId: "1:863835816058:web:b32a12a3d5b2bd53b87bc3",
  measurementId: "G-5BCNV112J3"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db}
