// Your web app's Firebase configuration
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB8UrZEAudj08jV8NUfd4NcQIfCN22xuY4",
    authDomain: "udemy-ninja-smoothie-8a023.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothie-8a023.firebaseio.com",
    projectId: "udemy-ninja-smoothie-8a023",
    storageBucket: "udemy-ninja-smoothie-8a023.appspot.com",
    messagingSenderId: "737884615103",
    appId: "1:737884615103:web:0f0f2a03fafbbd26"
  };

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots:true });
export default firebaseApp.firestore();