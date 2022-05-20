import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import ButtonDefault from './ButtonDefault'
import HistoryButton from './HistoryButton'
import AppStyles from '../styles/AppStyles'

const HistoryFlatlist = () => {
	const [testarray, setTestarray] = useState([
		{ course: 'Kode Golf', hols: '18 - hålsbana', info: 'Shop, Restaurang' },
		{ course: 'S:t Jörgen Golf', hols: '18 - hålsbana', info: 'Range, Shop' },
	])

	return (
		<FlatList
			ListHeaderComponent={() => (
				<Text
					style={[
						AppStyles.h2,
						{
							color: 'white',
							textAlign: 'center',
							fontWeight: '600',
							paddingBottom: 10,
						},
					]}
				>
					Historik
				</Text>
			)}
			contentContainerStyle={{}}
			data={testarray}
			keyExtractor={(item, index) => String(index)}
			renderItem={({ item }) => (
				<HistoryButton
					date="23 JUN"
					course={item.course}
					holes={item.hols}
					style={{ margin: 10 }}
					onPress={() => {
						console.log(item)
					}}
				/>
			)}
		/>
	)
}

export default HistoryFlatlist
