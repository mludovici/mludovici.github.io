import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAOAYKUnaTDDyCtfo80GbcvglW8cLbDNus",
//   authDomain: "homepage-e3c03.firebaseapp.com",
//   databaseURL: "https://homepage-e3c03.firebaseio.com",
//   projectId: "homepage-e3c03",
//   storageBucket: "homepage-e3c03.appspot.com",
//   messagingSenderId: "725579697927",
//   appId: "1:725579697927:web:82e60e338295eecbccffa2",
//   measurementId: "G-PDD61XQT5R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// REACT_APP_apiKey=AIzaSyAOAYKUnaTDDyCtfo80GbcvglW8cLbDNus
// export REACT_APP_authDomain=homepage-e3c03.firebaseapp.com
// export REACT_APP_databaseURL=https://homepage-e3c03.firebaseio.com
// export REACT_APP_projectId=homepage-e3c03
// export REACT_APP_storageBucket=homepage-e3c03.appspot.com
// export REACT_APP_messagingSenderId=725579697927
// export REACT_APP_appId=1:725579697927:web:82e60e338295eecbccffa2
// export REACT_APP_MEASUREMENT_ID=G-PDD61XQT5R
// export REACT_APP_GTM=GTM-TFXRWWB

let firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

console.log('process env:', process.env)

export const app = firebase.initializeApp(firebaseConfig)
export const analytics = firebase.analytics(app)
export const auth = app.auth()
export const firestore = app.firestore()
export const storage = app.storage()
