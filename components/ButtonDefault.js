import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const ButtonDefault = ({ text, onPress, style }) => {
	return (
		<View
			style={[
				styles.loginView,
				AppStyles.shadow,
				AppStyles.grey,
				AppStyles.border,
				{ ...style },
			]}
		>
			<TouchableOpacity onPress={onPress}>
				<Text style={[styles.textStyle, AppStyles.buttonText]}>{text}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ButtonDefault

const styles = StyleSheet.create({
	loginView: {
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		color: '#FFFFFF',
		flex: 1,
		padding: 10,
		marginLeft: 5,
	},
})
