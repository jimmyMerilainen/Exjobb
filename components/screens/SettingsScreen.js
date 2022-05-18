import React from 'react'
import { View, Text } from 'react-native'

import AppStyles from '../../styles/AppStyles'

const SettingsScreen = () => {
	return (
		<View style={AppStyles.container}>
			<Text style={[AppStyles.h1, { textAlign: 'center' }]}>INSTÄLLNINGAR</Text>
		</View>
	)
}

export default SettingsScreen
