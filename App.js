import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import LoginScreen from './components/screens/LoginScreen.js'
import HomeScreen from './components/screens/HomeScreen.js'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<Navigation />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
