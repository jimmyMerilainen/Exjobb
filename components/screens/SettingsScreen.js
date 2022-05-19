import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'

const SettingsScreen = () => {
	const logout = () => {
		signOut(auth).then(() => {
			console.log('Signed out!')
		})
	}
	return (
		<ImageBackground
			style={AppStyles.container}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View style={[AppStyles.container, styles.container]}>
				<ButtonDefault
					text="Ändra lösenord"
					onPress={() => {
						console.log('Ändra lösenord')
					}}
				/>
				<ButtonDefault
					text="Om appen"
					onPress={() => {
						console.log('Om appen')
					}}
				/>
				<ButtonDefault
					text="Logga ut"
					onPress={() => {
						logout()
					}}
				/>
			</View>
		</ImageBackground>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
})
