import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSTSxPGFaW4GlsP8JBZQaRNUrpT4blk8c",
    authDomain: "netflix-redux-clone-7a015.firebaseapp.com",
    projectId: "netflix-redux-clone-7a015",
    storageBucket: "netflix-redux-clone-7a015.appspot.com",
    messagingSenderId: "1001016104142",
    appId: "1:1001016104142:web:08e6881f129c9898646c9f"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth}
  export default db;