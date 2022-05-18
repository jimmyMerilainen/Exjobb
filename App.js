import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './components/screens/LoginScreen.js'

export default function App() {
	return (
		<LoginScreen>
			<View style={styles.container}></View>
		</LoginScreen>
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
