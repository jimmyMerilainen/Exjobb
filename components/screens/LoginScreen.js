import React, { useState, useRef } from 'react'
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import AppStyles from '../../styles/AppStyles'
import { Ionicons } from '@expo/vector-icons'

import {
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../../firebase'

import ButtonDefault from '../ButtonDefault'
import ChangeErrorText from '../ChangeErrorText'
import RegisterOverlay from '../RegisterOverlay'
import LoadingIndicator from '../LoadingIndicator'

const LoginScreen = () => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [showPassword, setShowPassword] = useState(false)
	const [errorMessage, setErrorMessage] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const ref_input = useRef()

	const handleSignIn = () => {
		setIsLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log('Signed in with ', user.email)
			})
			.catch((error) => {
				console.log(error.message)
				setErrorMessage(error.message)
			})
		setIsLoading(false)
	}

	const forgotPassword = () => {
		sendPasswordResetEmail(auth, 'raasmusnilsson@gmail.com')
			.then((response) => {
				console.log('Email sent!')
				console.log(response) // undefined
			})
			.catch((error) => {
				console.log(error.message)
			})
	}

	if (isLoading) {
		return <LoadingIndicator />
	} else
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
					<View
						style={[styles.textInputView, AppStyles.border, AppStyles.shadow]}
					>
						<TextInput
							onChangeText={(newText) => setEmail(newText)}
							value={email}
							placeholder="Email"
							placeholderTextColor={AppStyles.gold.color}
							selectionColor={AppStyles.gold.color}
							color={AppStyles.gold.color}
							style={[styles.textInput, AppStyles.textInput]}
							keyboardType="email-address"
							returnKeyType="next"
							onSubmitEditing={() => ref_input.current?.focus()}
						/>
					</View>
					<View style={styles.conteiner}>
						<TextInput
							placeholder="Lösenord"
							placeholderTextColor="#DDB58E"
							selectionColor="#DDB58E"
							color="#DDB58E"
							returnKeyType="go"
							style={styles.inputStyle}
							onChangeText={(newText) => setPassword(newText)}
							onSubmitEditing={() => handleSignIn()}
							value={password}
							secureTextEntry={showPassword ? false : true}
							ref={ref_input}
						/>
						<View style={styles.lineNearIcon}></View>
						<TouchableOpacity
							style={styles.iconContainer}
							onPress={() => {
								setShowPassword(!showPassword)
							}}
						>
							<Ionicons
								name={showPassword ? 'eye-outline' : 'eye-off-outline'}
								size={30}
								color="#DDB58E"
							/>
						</TouchableOpacity>
					</View>
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
						<TouchableOpacity
							onPress={() => {
								forgotPassword()
							}}
						>
							<Text style={[AppStyles.h3, { marginTop: 10, color: 'white' }]}>
								Glömt lösenord?
							</Text>
						</TouchableOpacity>
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
	textInputView: {
		backgroundColor: 'white',
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'flex-start',
		alignSelf: 'center',
	},
	textInput: {
		height: 63,
		flex: 1,
		padding: 10,
		marginLeft: 5,
	},
	conteiner: {
		backgroundColor: 'white',
		borderRadius: 15,
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#DDB58E',
		alignSelf: 'center',
		shadowColor: 'grey',
		shadowOpacity: 0.6,
		shadowRadius: 8,
		flexDirection: 'row',
	},
	iconContainer: {
		width: 55,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	lineNearIcon: {
		width: 1,
		height: 50,
		borderLeftWidth: 1,
		borderColor: '#DDB58E',
		opacity: 0.18,
	},
	inputStyle: {
		height: 63,
		flex: 1,
		padding: 10,
		marginLeft: 5,
		fontSize: 17,
	},
})
