import React from 'react'
import {
	View,
	Text,
	ImageBackground,
	Dimensions,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native'

const LoginScreen = () => {
	return (
		<ImageBackground
			style={{ flex: 1 }}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<View
				style={{ height: 180, justifyContent: 'center', alignSelf: 'center' }}
			>
				{/* <Image
					source={require('../../assets/golf-hacker-logo.png')}
					style={{ width: 150, height: 90, tintColor: 'white' }}
					resizeMode="contain"
				/> */}
				<Text
					style={{
						textAlign: 'center',
						fontSize: 50,
						fontFamily: 'Estonia',
						color: 'white',
					}}
				>
					GolfHacker
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<View
					style={{
						backgroundColor: 'white',
						borderRadius: 15,
						width: '85%',
						height: 50,
						marginBottom: 20,
						alignItems: 'flex-start',
						borderWidth: 1,
						borderColor: '#DDB58E',
						alignSelf: 'center',
						shadowColor: 'grey',
						shadowOpacity: 0.6,
						shadowRadius: 8,
					}}
				>
					<TextInput
						placeholder="Användarnamn"
						placeholderTextColor="#DDB58E"
						style={{
							height: 63,
							flex: 1,
							padding: 10,
							marginLeft: 5,
							fontSize: 17,
						}}
					/>
				</View>
				<View
					style={{
						backgroundColor: 'white',
						borderRadius: 15,
						width: '85%',
						height: 50,
						marginBottom: 20,
						alignItems: 'flex-start',
						borderWidth: 1,
						borderColor: '#DDB58E',
						alignSelf: 'center',
						shadowColor: 'grey',
						shadowOpacity: 0.6,
						shadowRadius: 8,
					}}
				>
					<TextInput
						placeholder="Lösenord"
						placeholderTextColor="#DDB58E"
						style={{
							height: 63,
							flex: 1,
							padding: 10,
							marginLeft: 5,
							fontSize: 17,
						}}
					/>
				</View>
				<View
					style={{
						backgroundColor: 'rgba(196, 196, 196, 0.6)',
						borderRadius: 15,
						width: '85%',
						height: 50,
						marginBottom: 20,
						alignItems: 'center',
						borderWidth: 1,
						borderColor: '#DDB58E',
						alignSelf: 'center',
						justifyContent: 'center',
						shadowColor: 'grey',
						shadowOpacity: 0.6,
						shadowRadius: 8,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							console.log('LOGGAR IN')
						}}
					>
						<Text
							style={{
								color: '#FFFFFF',
								fontSize: 22,
								flex: 1,
								padding: 10,
								marginLeft: 5,
							}}
						>
							{' '}
							Logga in{' '}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ width: '80%', alignSelf: 'center' }}>
					<Text style={{ fontSize: 15 }}>
						Konto sedan tidigare?{'\n'}Logga in ovan för att ladda dina
						uppgifter
					</Text>
				</View>
			</View>
		</ImageBackground>
	)
}
export default LoginScreen
