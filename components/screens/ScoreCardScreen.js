import React from 'react'
import { View, Text } from 'react-native'

import AppStyles from '../../styles/AppStyles'

const ScoreCardScreen = () => {
	return (
		<View style={AppStyles.container}>
			<Text style={[AppStyles.h1, { textAlign: 'center' }]}> SCORE KORT </Text>
		</View>
	)
}

export default ScoreCardScreen
