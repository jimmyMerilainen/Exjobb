import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

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
const auth = getAuth(app)

export { app, auth }
