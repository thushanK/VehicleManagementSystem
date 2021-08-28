import firebase from 'firebase/app'
import "firebase/storage"

const config = {

  apiKey: "AIzaSyCI84IxO2SlGvLgM3sI77xg7LWOtK8yOSI",
  authDomain: "vehicle-management-88996.firebaseapp.com",
  projectId: "vehicle-management-88996",
  storageBucket: "vehicle-management-88996.appspot.com",
  messagingSenderId: "827267146120",
  appId: "1:827267146120:web:2317da898608d17b2cda3d"

};



firebase.initializeApp (config)
const storage = firebase.storage();
export { storage,firebase as default }


