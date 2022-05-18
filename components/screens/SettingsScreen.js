import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import AppStyles from '../../styles/AppStyles'

const SettingsScreen = () => {
	return (
		<ImageBackground
			style={AppStyles.container}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View style={AppStyles.container}>
				<Text style={[AppStyles.h1, { textAlign: 'center' }]}>
					INSTÄLLNINGAR
				</Text>
			</View>
		</ImageBackground>
	)
}

export default SettingsScreen
