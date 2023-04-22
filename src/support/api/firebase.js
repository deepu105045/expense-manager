import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { CREATED_TIMESTAMP,DISPLAY_NAME } from '../Constants';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBgck2L6AngkP5hLDMX4qbC_GeX_nxTW3c",
  authDomain: "watch-my-wallet.firebaseapp.com",
  projectId: "watch-my-wallet",
  storageBucket: "watch-my-wallet.appspot.com",
  messagingSenderId: "43714352990",
  appId: "1:43714352990:web:53dd0e7c78f2e4a6c821cf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const addDocument = (collectionName, data) => {
  data[CREATED_TIMESTAMP]= firebase.firestore.FieldValue.serverTimestamp();
  return db.collection(collectionName).add(data);
};

export const getDocuments = (collectionName,field,direction) => {
  return db.collection(collectionName).orderBy(field,direction).get();
};

export const updateDocument = (collectionName, docId, data) => {
  data[CREATED_TIMESTAMP]= firebase.firestore.FieldValue.serverTimestamp();
  return db.collection(collectionName).doc(docId).update(data);
};

export const deleteDocument = (collectionName, docId) => {
  return db.collection(collectionName).doc(docId).delete();
};

export const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem(DISPLAY_NAME,user.displayName)
        return user;
      
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      
      });

}


