import React from 'react'
import { Text } from 'react-native'
import AppStyles from '../styles/AppStyles'

const ChangeErrorText = ({ text, style }) => {
	const ChangeText = () => {
		if (text === 'Firebase: Error (auth/user-not-found).') {
			return 'Avändare finns inte'
		}
		if (text === 'Firebase: Error (auth/wrong-password).') {
			return 'Fel lösenord'
		}
		if (text === 'Firebase: Error (auth/internal-error).') {
			return 'Fyll i alla fält'
		}
		if (text === 'Firebase: Error (auth/missing-email).') {
			return 'Fyll i din email address'
		}
		if (text === 'Firebase: Error (auth/invalid-email).') {
			return 'Ingen giltlig email address'
		}
		if (
			text ===
			'Firebase: Password should be at least 6 characters (auth/weak-password).'
		) {
			return 'Lösenordet ska vara minst 6 karaktärer'
		}
		if (text === 'Firebase: Error (auth/admin-restricted-operation).') {
			return 'Något gick helt fel..'
		} else {
			return text
		}
	}
	return (
		<Text style={[AppStyles.warning, AppStyles.h3, { ...style }]}>
			{ChangeText()}
		</Text>
	)
}

export default ChangeErrorText
