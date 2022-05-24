import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import UserAvatar from 'react-native-user-avatar'
import { db, auth } from '../../firebase'
import {
	doc,
	getDoc,
	where,
	query,
	collection,
	getDocs,
} from 'firebase/firestore'

import AppStyles from '../../styles/AppStyles'
import HistoryFlatlist from '../HistoryFlatlist'

const ProfileScreen = ({ navigation }) => {
	const [username, setUsername] = useState('Tiger Woods')
	const [playedRounds, setPlayedRounds] = useState([])

	const loadPlayedRounds = async () => {
		const userId = auth.currentUser.uid
		let userHistory = []
		const q = query(collection(db, 'users'), where('userId', '==', userId))
		const querySnapshot = await getDocs(q)

		querySnapshot.forEach((doc) => {
			userHistory.push(doc.data())
		})

		setUsername(userHistory[0].username)
		if (userHistory[0].playedRounds !== undefined) {
			setPlayedRounds(userHistory[0].playedRounds)
		}
	}

	useEffect(() => {
		loadPlayedRounds()
	}, [])

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
					<HistoryFlatlist data={playedRounds} />
				</View>
			</View>
		</ImageBackground>
	)
}

export default ProfileScreen
