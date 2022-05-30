import React from 'react'
import { Text } from 'react-native'
import AppStyles from '../styles/AppStyles'
import { convertResponseText } from '../helpers'

const ChangeErrorText = ({ text, style }) => {
	return (
		<Text style={[AppStyles.warning, AppStyles.h3, { ...style }]}>
			{convertResponseText(text)}
		</Text>
	)
}

export default ChangeErrorText
