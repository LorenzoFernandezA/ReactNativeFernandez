import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBTx4LhfC3_QhjJMnoyWGxGe1xylHY0DI8",
  authDomain: "clasefirebase-53810.firebaseapp.com",
  projectId: "clasefirebase-53810",
  storageBucket: "clasefirebase-53810.firebasestorage.app",
  messagingSenderId: "403356672467",
  appId: "1:403356672467:web:3f9890ac38deef6cec4f26"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()