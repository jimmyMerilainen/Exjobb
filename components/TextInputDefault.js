import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const TextInputDefault = ({ placeholder, style }) => {
	return (
		<View
			style={[
				styles.textInputView,
				AppStyles.border,
				AppStyles.shadow,
				{ ...style },
			]}
		>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor="#DDB58E"
				style={[styles.textInput, AppStyles.textInput]}
			/>
		</View>
	)
}
export default TextInputDefault

const styles = StyleSheet.create({
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
})
