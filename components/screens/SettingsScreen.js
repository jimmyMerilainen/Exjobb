import React, { useState, useEffect } from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'
import { auth } from '../../firebase'
import {
	signOut,
	EmailAuthProvider,
	reauthenticateWithCredential,
	updatePassword,
} from 'firebase/auth'

import { RootSiblingParent } from 'react-native-root-siblings'

import { showToast } from '../../helpers'
import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'
import ChangeCredentialsOverlay from '../ChangeCredentialsOverlay'

const SettingsScreen = () => {
	const [errorMessage, setErrorMessage] = useState()

	const logout = () => {
		signOut(auth).then(() => {
			console.log('Signed out!')
		})
	}
	const newPassword = async (currentPassword, newPassword) => {
		const user = auth.currentUser
		const cred = EmailAuthProvider.credential(user.email, currentPassword)
		try {
			await reauthenticateWithCredential(user, cred)
			await updatePassword(user, newPassword)
			showToast('Password updated!', true)
		} catch (e) {
			setErrorMessage(e.message)
		}
	}

	return (
		<RootSiblingParent>
			<ImageBackground
				style={AppStyles.container}
				source={require('../../assets/images/background.png')}
				resizeMode="cover"
			>
				<View style={[AppStyles.container, styles.container]}>
					<ChangeCredentialsOverlay
						handleOnPress={newPassword}
						errorMessage={errorMessage}
					/>
					<ButtonDefault
						text="Om appen"
						onPress={() => {
							showToast('GJORD AV JIMMY & RASMUS', true)
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
		</RootSiblingParent>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
})
