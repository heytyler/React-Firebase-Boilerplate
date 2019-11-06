import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  // ENTER YOUR FIREBASE CONFIG OBJECT HERE
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
