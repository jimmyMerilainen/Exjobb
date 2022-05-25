import React from 'react'
import { View, Text, FlatList } from 'react-native'
import HistoryButton from './HistoryButton'
import AppStyles from '../styles/AppStyles'

const HistoryFlatlist = ({ data }) => {
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
	const days = ['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön']

	const changeDateLanguage = (monthIndex, dayIndex, day, year) => {
		let sweMonth = months[monthIndex]
		let sweDay = days[dayIndex]
		let sweFullYear = sweDay.concat(' ', sweMonth, ' ', day, ' ', year)

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
							console.log(item)
						}}
					/>
				)}
			/>
		</View>
	)
}

export default HistoryFlatlist
