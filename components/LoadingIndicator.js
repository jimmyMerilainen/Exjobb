import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const LoadingIndicator = () => {
	return (
		<View style={{ justifyContent: 'center', flex: 1 }}>
			<ActivityIndicator size="large" color="#96C2A8" />
		</View>
	)
}

export default LoadingIndicator
