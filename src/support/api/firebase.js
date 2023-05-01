import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { CREATED_TIMESTAMP, DISPLAY_NAME, IS_LOGGEDIN, EXPENSE_COLLECTION, TRANSACTION_DATE,DESC } from '../Constants';
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
  data[CREATED_TIMESTAMP] = firebase.firestore.FieldValue.serverTimestamp();
  return db.collection(collectionName).add(data);
};

export const getDocuments = (collectionName, field, direction) => {
  return db.collection(collectionName).orderBy(field, direction).get();
};

export const updateDocument = (collectionName, docId, data) => {
  data[CREATED_TIMESTAMP] = firebase.firestore.FieldValue.serverTimestamp();
  return db.collection(collectionName).doc(docId).update(data);
};

export const deleteDocument = (collectionName, docId) => {
  return db.collection(collectionName).doc(docId).delete();
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem(DISPLAY_NAME, user.displayName)
      localStorage.set(IS_LOGGEDIN, true)
      return user;

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

    });

}

export const filterByDates = (startDate,endDate) => {
  console.log('Inside firebase filterBy date function')
  console.log(startDate)
  console.log(endDate)
  let dataArray =[];
  return db.collection(EXPENSE_COLLECTION)
        .where(TRANSACTION_DATE, '>=', startDate)
        .where(TRANSACTION_DATE, '<=', endDate)
        .orderBy(TRANSACTION_DATE,DESC)
        .get().then(snap =>{
          snap.forEach((doc) => {
            dataArray.push({ ...doc.data(), id: doc.id })
            })
        return dataArray
        })
        .catch((error)=>{
          console.log("Error getting documents: ", error);
        })
}

export const groupByCategory = (startDate,endDate) =>{
  let groups = {};
  return db.collection(EXPENSE_COLLECTION)
            .where(TRANSACTION_DATE, '>=', startDate)
            .where(TRANSACTION_DATE, '<=', endDate)
            .get()
            .then(snap =>{
              snap.forEach((doc)=>{
                const data = doc.data();
                let category = data.category;
                const amount = data.amount;
                category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

                if (!groups[category]) {
                  groups[category] = 0;
                }
                groups[category]= +groups[category] + +amount;
              })
              return groups;
            })
}

