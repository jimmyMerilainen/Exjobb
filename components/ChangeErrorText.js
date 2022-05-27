import React from 'react'
import { Text } from 'react-native'
import AppStyles from '../styles/AppStyles'
import { ConvertResponseText } from '../helpers'

const ChangeErrorText = ({ text, style }) => {
	return (
		<Text style={[AppStyles.warning, AppStyles.h3, { ...style }]}>
			{ConvertResponseText(text)}
		</Text>
	)
}

export default ChangeErrorText
