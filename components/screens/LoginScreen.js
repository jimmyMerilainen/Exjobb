import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import AppStyles from '../../styles/AppStyles'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import ButtonDefault from '../ButtonDefault'
import TextInputDefault from '../TextInputDefault'
import ChangeErrorText from '../ChangeErrorText'
import RegisterOverlay from '../RegisterOverlay'

const LoginScreen = () => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [errorMessage, setErrorMessage] = useState()

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log('Signed in with ', user.email)
			})
			.catch((error) => {
				console.log(error.message)
				setErrorMessage(error.message)
			})
	}

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
				<TextInputDefault textCallback={setEmail} placeholder="Email" />
				<TextInputDefault textCallback={setPassword} placeholder="Lösenord" />
				<ButtonDefault
					text="Logga in"
					onPress={() => {
						handleSignIn()
					}}
				/>

				<RegisterOverlay />

				<View style={{ width: '80%', alignSelf: 'center' }}>
					{errorMessage && <ChangeErrorText text={errorMessage} />}
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
