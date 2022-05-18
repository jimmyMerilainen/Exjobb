import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

import AppStyles from '../../styles/AppStyles'

const ProfileScreen = ({ navigation }) => {
	return (
		<ImageBackground
			style={AppStyles.container}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View style={AppStyles.container}>
				<Text style={[AppStyles.h1, { textAlign: 'center' }]}>PROFIL SIDA</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Inställningar')
					}}
				>
					<Text
						style={{
							justifyContent: 'center',
							textAlign: 'center',
							color: 'tomato',
						}}
					>
						GÅ TILL INSTÄLLNINGAR
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

export default ProfileScreen
