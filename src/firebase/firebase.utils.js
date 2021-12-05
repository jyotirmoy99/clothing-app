import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAb_xHhg2H5Lvd4hqATyuGpoO7l95H4Ji4",
  authDomain: "clothing-app-18731.firebaseapp.com",
  projectId: "clothing-app-18731",
  storageBucket: "clothing-app-18731.appspot.com",
  messagingSenderId: "781997190335",
  appId: "1:781997190335:web:93b0a2924d0cff1deaaa0a",
  measurementId: "G-Y20LLRNZJG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promit: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
