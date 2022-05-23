import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import UserAvatar from 'react-native-user-avatar'

import AppStyles from '../../styles/AppStyles'
import HistoryFlatlist from '../HistoryFlatlist'

const ProfileScreen = ({ navigation }) => {
	const [username, setUsername] = useState('Tiger Woods')

	return (
		<ImageBackground
			style={AppStyles.container}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View style={[AppStyles.container]}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						marginTop: 5,
						marginRight: 15,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Inställningar')
						}}
					>
						<Ionicons name="settings-outline" size={35} color="white" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: 'row',
						paddingHorizontal: 12,
						flex: 0.15,
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							flex: 0.3,
						}}
					>
						<UserAvatar
							name={username ? username : null}
							size={110}
							bgColor="#96C2A8"
						/>
					</View>

					<View
						style={{
							justifyContent: 'center',
							flex: 0.7,
							marginLeft: 15,
						}}
					>
						<Text style={[AppStyles.h2, { textAlign: 'left', color: 'white' }]}>
							{username ? username : null}
						</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}
				>
					<HistoryFlatlist />
				</View>
			</View>
		</ImageBackground>
	)
}

export default ProfileScreen
