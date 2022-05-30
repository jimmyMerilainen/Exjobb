import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyles from '../styles/AppStyles'
import { useGameCheckFunction } from '../context/GameContext'
import Images from '../Images'
import Icons from '../Icons'
import Fontisto from '@expo/vector-icons/Fontisto'
import { getLocationDistance } from '../helpers'
import * as Location from 'expo-location'

import { db } from '../firebase'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'

const CourseCard = ({ navigation }) => {
	const gameCheckContext = useGameCheckFunction()
	const [courseArray, setCourseArray] = useState([])
	const [tempCourseArray, setTempCourseArray] = useState([])
	const [currentLocation, setCurrentLocation] = useState(null)

	const [done, setDone] = useState(false)

	useEffect(() => {
		const getCurrentLocation = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== 'granted') {
				console.log('Permission to access location was denied')
				return
			}
			let currentLocation = await Location.getCurrentPositionAsync({})
			setCurrentLocation({
				latitude: currentLocation.coords.latitude,
				longitude: currentLocation.coords.longitude,
			})
		}
		getCurrentLocation()
	}, [])

	useEffect(() => {
		const tempArray = []
		const getCourse = async () => {
			const q = query(collection(db, 'golfcourses'), orderBy('name', 'asc'))
			const data = await getDocs(q)
			data.forEach((doc) => {
				tempArray.push(doc.data())
			})
			setTempCourseArray(tempArray)
			setDone(true)
		}

		getCourse()
	}, [])

	useEffect(() => {
		const tempArray = []
		const fetchWeather = async () => {
			for (let index = 0; index < tempCourseArray.length; index++) {
				const data = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${tempCourseArray[index].city}&appid=8d2d6315d41f327ab048d502e92fe5d5`,
				)
				const response = await data.json()

				for (let j = 0; j < Icons.length; j++) {
					for (let n = 0; n < Icons[j].id.length; n++) {
						if (Icons[j].id[n] === response.weather[0].id) {
							tempArray.push({ ...tempCourseArray[index], icon: Icons[j].name })
						}
					}
				}
			}
			gameCheckContext.setCourseArray(tempArray)
			setCourseArray(tempArray)
		}

		fetchWeather()
	}, [done])

	const setRightImages = (courseImage) => {
		for (let index = 0; index < Images.length; index++) {
			if (courseImage === Images[index].name) return Images[index].image
		}
	}

	const pressCard = (name, guide) => {
		gameCheckContext.setWordToSearch('')
		gameCheckContext.setCleanSearchBar(true)
		navigation.navigate('Scorecard', {
			courseName: name,
			courseGuide: guide,
		})
	}

	return (
		<View style={{ flex: 1 }}>
			{gameCheckContext.noMatch ? (
				<Text
					style={[
						AppStyles.h3,
						AppStyles.warning,
						{ alignSelf: 'center', width: '85%' },
					]}
				>
					Inga banor hittades med namnet "{gameCheckContext.wordToSearch}"
				</Text>
			) : gameCheckContext.searchArray.length > 0 ? (
				gameCheckContext.searchArray.map((course, index) => (
					<TouchableOpacity
						index={index}
						key={index}
						disabled={gameCheckContext.gameStarted}
						onPress={() => pressCard(course.name, course.courseguide)}
					>
						<View style={styles.conteiner}>
							<ImageBackground
								style={styles.imageStyle}
								source={setRightImages(course.image)}
								resizeMode="cover"
							>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'flex-end',
										paddingRight: 15,
										paddingTop: 5,
									}}
								>
									<Fontisto name={course.icon} size={24} color="white" />
								</View>
								<View style={styles.viewInsideCard}>
									<Text style={[AppStyles.h2, styles.textInsideCard]}>
										{course.name}
									</Text>
									<Text style={[styles.textInsideCard]}>
										{course.holes}-hålsbana
									</Text>
									<Text style={[styles.textInsideCard]}>
										Övrigt: {course.information}
									</Text>
								</View>
							</ImageBackground>
						</View>
					</TouchableOpacity>
				))
			) : (
				courseArray.map((course, index) => (
					<TouchableOpacity
						index={index}
						key={index}
						disabled={gameCheckContext.gameStarted}
						onPress={() => {
							navigation.navigate('Scorecard', {
								courseName: course.name,
								courseGuide: course.courseguide,
							})
						}}
					>
						<View style={styles.conteiner}>
							<ImageBackground
								style={styles.imageStyle}
								source={setRightImages(course.image)}
								resizeMode="cover"
							>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										paddingRight: 15,
										paddingTop: 5,
										paddingLeft: 15,
									}}
								>
									{currentLocation && (
										<Text style={[styles.textInsideCard]}>
											Avstånd:{' '}
											{getLocationDistance(currentLocation, course.location)} km
										</Text>
									)}
									<Fontisto name={course.icon} size={24} color="white" />
								</View>

								<View style={styles.viewInsideCard}>
									<Text style={[AppStyles.h2, styles.textInsideCard]}>
										{course.name}
									</Text>
									<Text style={[styles.textInsideCard]}>
										{course.holes}-hålsbana
									</Text>
									<Text style={[styles.textInsideCard]}>
										Övrigt: {course.information}
									</Text>
								</View>
							</ImageBackground>
						</View>
					</TouchableOpacity>
				))
			)}
		</View>
	)
}

export default CourseCard

const styles = StyleSheet.create({
	conteiner: {
		borderRadius: 15,
		width: '85%',
		height: 100,
		marginTop: 20,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#DDB58E',
		alignSelf: 'center',
		shadowColor: 'grey',
		shadowOpacity: 0.6,
		shadowRadius: 8,
	},
	imageStyle: {
		flex: 1,
		width: '100%',
		borderRadius: 15,
		overflow: 'hidden',
	},
	viewInsideCard: {
		paddingLeft: 15,
	},
	textInsideCard: {
		color: 'white',
	},
})
