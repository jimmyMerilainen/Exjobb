import { View } from 'react-native'
import { useEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'
import { auth } from './firebase'
import LoginScreen from './components/screens/LoginScreen'
import { GameProvider } from './context/GameContext'

export default function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState()

	function onAuthStateChanged(user) {
		setUser(user)
		if (isLoading) setIsLoading(false)
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged)
		return unsubscribe
	}, [])

	if (isLoading) return null

	if (!user) {
		return (
			<View style={{ flex: 1 }}>
				<LoginScreen />
			</View>
		)
	}

	return (
		<SafeAreaProvider>
			<GameProvider>
				<Navigation />
			</GameProvider>
		</SafeAreaProvider>
	)
}
