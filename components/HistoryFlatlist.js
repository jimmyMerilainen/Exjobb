import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import ButtonDefault from './ButtonDefault'
import HistoryButton from './HistoryButton'
import AppStyles from '../styles/AppStyles'

const HistoryFlatlist = () => {
	const [testarray, setTestarray] = useState([
		{ course: 'Kode Golf', holes: '18 - hålsbana', info: 'Shop, Restaurang' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
		{ course: 'S:t Jörgen Golf', holes: '18 - hålsbana', info: 'Range, Shop' },
	])

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
				data={testarray}
				keyExtractor={(item, index) => String(index)}
				renderItem={({ item }) => (
					<HistoryButton
						date="23 JUN"
						course={item.course}
						holes={item.holes}
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
