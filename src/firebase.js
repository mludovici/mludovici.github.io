import env from './env.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: env.REACT_APP_FIREBASE_API_KEY,
    authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_FIREBASE_SENDER_ID,
    appId: env.REACT_APP_FIREBASE_APP_ID,
    measurementId: env.REACT_APP_MEASUREMENT_ID,
}

export const app = firebase.initializeApp(firebaseConfig)
export const analytics = firebase.analytics(app)
export const auth = app.auth()
export const firestore = app.firestore()
export const storage = app.storage()
