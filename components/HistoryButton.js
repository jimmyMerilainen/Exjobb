import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppStyles from '../styles/AppStyles'

const HistoryButton = ({ date, name, strokes, onPress, style }) => {
	return (
		<View
			style={[
				styles.loginView,
				AppStyles.shadow,
				AppStyles.grey,
				AppStyles.border,
				{ ...style },
			]}
		>
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={onPress}>
					<View>
						<Text
							numberOfLines={1}
							style={[
								AppStyles.buttonText,
								{ color: 'white', paddingLeft: 10 },
							]}
						>
							{date ? date : ''}
						</Text>
						<Text
							numberOfLines={1}
							style={[
								AppStyles.buttonText,
								{ color: 'white', paddingLeft: 10 },
							]}
						>
							{name ? name : ''}
						</Text>
						<Text
							numberOfLines={1}
							style={[
								AppStyles.buttonText,
								{ color: 'white', paddingLeft: 10 },
							]}
						>
							{strokes ? strokes + ' Slag' : ''}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HistoryButton

const styles = StyleSheet.create({
	loginView: {
		width: '100%',
		height: 85,
		alignItems: 'flex-start',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	textStyle: { color: 'white' },
})
