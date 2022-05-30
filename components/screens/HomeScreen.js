import { ImageBackground, ScrollView, View } from 'react-native'
import React from 'react'
import SearchBarComponent from '../SearchBarComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import CourseCard from '../CourseCard'

const HomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			style={{ flex: 1 }}
			source={require('../../assets/images/background.png')}
			resizeMode="cover"
		>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ marginTop: 15 }}>
					<SearchBarComponent />
				</View>
				<ScrollView keyboardDismissMode="on-drag">
					<CourseCard navigation={navigation} />
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default HomeScreen
