import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
	apiKey: 'AIzaSyA5DtEslkH9Ib12GjwGMgTKyGrULcMlNHA',
	authDomain: 'golfhacker-634d5.firebaseapp.com',
	projectId: 'golfhacker-634d5',
	storageBucket: 'golfhacker-634d5.appspot.com',
	messagingSenderId: '389097613656',
	appId: '1:389097613656:web:22dee79864da36caa8dd2d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})

export { app, auth, db }
