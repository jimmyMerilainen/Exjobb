import React, { useState } from 'react'
import {
	Modal,
	Text,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native'

import ButtonDefault from './ButtonDefault'
import AppStyles from '../styles/AppStyles'
import TextInputDefault from './TextInputDefault'
import ChangeErrorText from './ChangeErrorText'

const ChangeCredentialsOverlay = ({ handleOnPress, errorMessage }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [currentPassword, setCurrentPassword] = useState()
	const [newPassword, setNewPassword] = useState()

	return (
		<View
			style={[
				AppStyles.registerView,
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
					<View
						style={[AppStyles.modalView, AppStyles.border, AppStyles.shadow]}
					>
						<Text style={[AppStyles.modalText, AppStyles.h1]}>
							Ändra Lösenord
						</Text>
						<Text style={[AppStyles.modalText, AppStyles.h3]}>
							Skriv in nya uppgifter nedan
						</Text>
						<TextInputDefault
							type="password"
							textCallback={setCurrentPassword}
							placeholder="Nuvarande lösenord"
						/>

						<TextInputDefault
							type="password"
							textCallback={setNewPassword}
							placeholder="Nytt lösenord"
						/>
						{errorMessage && (
							<ChangeErrorText
								text={errorMessage}
								style={{ marginBottom: 8 }}
							/>
						)}

						<View style={{ width: '100%' }}>
							<ButtonDefault
								style={{}}
								text="Ändra"
								onPress={() => {
									handleOnPress(currentPassword, newPassword)
								}}
							/>
							<ButtonDefault
								text="Avbryt"
								onPress={() => {
									setModalVisible(!modalVisible)
								}}
							/>
						</View>
					</View>
				</Modal>
			</KeyboardAvoidingView>
			<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
				<Text
					style={[
						AppStyles.buttonText,
						{ color: 'white', textAlign: 'center' },
					]}
				>
					Ändra lösenord
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ChangeCredentialsOverlay

/* 5 flaskor, 2 flaskor alkoholfritt, 4st öl Sandra
	 GingerJoe 2st, Cidre, Öl
*/
