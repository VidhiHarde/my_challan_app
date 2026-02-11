import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyBat7gcB2vJeIIu9IdncG4GFxaDtdNkkPo',
  authDomain: 'my-challan-app.firebaseapp.com',
  projectId: 'my-challan-app',
  storageBucket: 'my-challan-app.appspot.com',
  messagingSenderId: '857381028331',
  appId: '1:857381028331:web:43583d7165c50aa9aa99ae',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
