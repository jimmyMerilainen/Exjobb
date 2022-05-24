import React from 'react'
import { View, Text, FlatList } from 'react-native'
import HistoryButton from './HistoryButton'
import AppStyles from '../styles/AppStyles'

const HistoryFlatlist = ({ data }) => {
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
						date={item.date}
						name={item.name}
						strokes={item.strokes}
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
