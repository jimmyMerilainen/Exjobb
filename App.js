import { View } from 'react-native'
import { useLayoutEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'
import { auth } from './firebase'
import LoginScreen from './components/screens/LoginScreen'

export default function App() {
	const [isLogged, setIsLogged] = useState(false)

	useLayoutEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLogged(true)
				console.log('Logged in with: ', user.email)
			} else {
				setIsLogged(false)
				console.log('No user')
			}
		})
		return unsubscribe
	}, [])

	return isLogged ? (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<Navigation />
			</SafeAreaView>
		</SafeAreaProvider>
	) : (
		<View style={{ flex: 1 }}>
			<LoginScreen />
		</View>
	)
}
