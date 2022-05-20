import React, { useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

import ButtonDefault from './ButtonDefault'
import AppStyles from '../styles/AppStyles'
import TextInputDefault from './TextInputDefault'
import ChangeErrorText from './ChangeErrorText'

const RegisterOverlay = ({ handleOnPress }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [username, setUsername] = useState()
	const [errorMessage, setErrorMessage] = useState()

	const handleCreateAccount = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				console.log('Account created with email: ', user.email)
			})
			.catch((error) => {
				console.log(error.message)
				setErrorMessage(error.message)
			})
	}

	return (
		<View
			style={[
				styles.registerView,
				AppStyles.shadow,
				AppStyles.grey,
				AppStyles.border,
				,
				{
					justifyContent: 'center',
					alignContent: 'center',
					alignSelf: 'center',
				},
			]}
		>
			<KeyboardAvoidingView behavior={'position'}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible)
					}}
				>
					<View style={[styles.modalView, AppStyles.border, AppStyles.shadow]}>
						<Text style={[styles.modalText, AppStyles.h1, {}]}>
							Skapa Konto
						</Text>
						<Text style={[styles.modalText, AppStyles.h3]}>
							Skriv in dina uppgifter nedan
						</Text>
						<TextInputDefault
							textCallback={setUsername}
							placeholder="Användarnamn"
						/>
						<TextInputDefault textCallback={setEmail} placeholder="Email" />
						<TextInputDefault
							textCallback={setPassword}
							placeholder="Lösenord"
						/>
						<ButtonDefault
							text="Registrera"
							onPress={() => {
								handleCreateAccount()
							}}
						/>
						<ButtonDefault
							text="Avbryt"
							onPress={() => {
								setModalVisible(!modalVisible)
							}}
						/>
						{errorMessage && (
							<ChangeErrorText
								text={errorMessage}
								style={{ marginBottom: 15 }}
							/>
						)}
					</View>
				</Modal>
			</KeyboardAvoidingView>
			<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
				<Text style={[styles.textStyle, AppStyles.buttonText]}>Registrera</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	modalView: {
		height: 550,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		marginBottom: 100,
		width: '85%',
		backgroundColor: 'white',
		alignSelf: 'center',
	},
	registerView: {
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		color: 'white',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
})

export default RegisterOverlay
