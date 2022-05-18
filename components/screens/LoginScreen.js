import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import AppStyles from '../../styles/AppStyles'

import LoginButton from '../LoginButton'
import TextInputDefault from '../TextInputDefault'

const LoginScreen = () => {
	return (
		<ImageBackground
			style={AppStyles.container}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View style={styles.logoView}>
				<Text style={[styles.logoText, AppStyles.h1]}>GolfHacker</Text>
			</View>
			<View style={AppStyles.container}>
				<TextInputDefault placeholder="Användarnamn" />
				<TextInputDefault placeholder="Lösenord" />
				<LoginButton text="Logga in" onPress={console.log('LOGGA IN')} />

				<View style={{ width: '80%', alignSelf: 'center' }}>
					<Text style={AppStyles.h3}>
						Konto sedan tidigare?{'\n'}Logga in ovan för att ladda dina
						uppgifter
					</Text>
				</View>
			</View>
		</ImageBackground>
	)
}
export default LoginScreen

const styles = StyleSheet.create({
	logoView: {
		height: 180,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	logoText: {
		textAlign: 'center',
		color: 'white',
	},
})
