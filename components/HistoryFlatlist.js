import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import HistoryButton from './HistoryButton'
import HistoryScoreCard from './HistoryScoreCard'
import AppStyles from '../styles/AppStyles'
import { doc, updateDoc, arrayRemove } from 'firebase/firestore'
import { auth, db } from '../firebase'

const HistoryFlatlist = ({ data }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [itemToChild, setItemToChild] = useState()
	const months = [
		'Jan',
		'Feb',
		'Mars',
		'April',
		'Maj',
		'Juni',
		'Juli',
		'Aug',
		'Sep',
		'Okt',
		'Nov',
		'Dec',
	]
	const days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör']

	const changeDateLanguage = (monthIndex, dayIndex, day, year) => {
		let sweMonth = months[monthIndex]
		let sweDay = days[dayIndex]
		let sweFullYear = sweDay.concat(' ', sweMonth, ' ', day, ' ', year)
		console.log('day index', dayIndex)

		return sweFullYear
	}

	const convertDate = (dateInput) => {
		let converted = new Date(
			dateInput.seconds * 1000 + dateInput.nanoseconds / 1000000,
		)
		return changeDateLanguage(
			converted.getMonth(),
			converted.getDay(),
			converted.getDate(),
			converted.getFullYear(),
		)
	}

	const calculateStrokes = (scorecard) => {
		let strokes = 0
		for (let index = 0; index < scorecard.length; index++) {
			const element = scorecard[index]
			if (element.strokes) strokes += element.strokes
		}
		return strokes
	}

	const openModalwithItem = (playedRound) => {
		setItemToChild(playedRound)
		setModalVisible(!modalVisible)
	}
	const deleteRoundFromHistory = async (item) => {
		const userRef = doc(db, 'users', auth.currentUser.uid)
		await updateDoc(userRef, {
			history: arrayRemove(item),
		})
	}

	return (
		<View
			style={{
				paddingTop: 30,
				width: '85%',
				justifyContent: 'center',
				alignSelf: 'center',
				height: '95%',
			}}
		>
			<FlatList
				ListHeaderComponent={() => (
					<Text
						style={[
							AppStyles.h2,
							{
								color: 'white',
								textAlign: 'center',
								fontWeight: '600',
								flex: 1,
							},
						]}
					>
						Historik
					</Text>
				)}
				contentContainerStyle={{ paddingBottom: 10 }}
				data={data}
				keyExtractor={(item, index) => String(index)}
				renderItem={({ item }) => (
					<HistoryButton
						date={convertDate(item.date)}
						name={item.course}
						strokes={calculateStrokes(item.scorecard)}
						style={{ margin: 8 }}
						onPress={() => {
							openModalwithItem(item)
						}}
					/>
				)}
			/>
			{modalVisible ? (
				<HistoryScoreCard
					deleteItem={deleteRoundFromHistory}
					data={itemToChild}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
			) : null}
		</View>
	)
}

export default HistoryFlatlist
