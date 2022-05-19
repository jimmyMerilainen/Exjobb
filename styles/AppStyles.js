import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
	container: {
		flex: 1,
	},

	/*  Image  */

	/*  Text  */
	h1: {
		fontSize: 50,
	},
	h2: {
		fontSize: 22,
	},
	h3: {
		fontSize: 16,
	},
	textInput: {
		fontSize: 17,
	},
	buttonText: {
		fontSize: 20,
	},

	/*  Colors  */
	gold: {
		color: '#DDB58E',
		backgroundColor: '#DDB58E',
		tintColor: '#DDB58E',
	},
	grey: {
		color: 'rgba(196, 196, 196, 0.6)',
		backgroundColor: 'rgba(196, 196, 196, 0.6)',
		tintColor: 'rgba(196, 196, 196, 0.6)',
	},
	white: {
		color: 'white',
		backgroundColor: 'white',
		tintColor: 'white',
	},
	warning: {
		color: '#C41E3D',
	},

	/* Shadow */
	shadow: {
		shadowColor: 'grey',
		shadowOpacity: 0.6,
		shadowRadius: 8,
	},
	/* Border */
	border: {
		borderWidth: 1,
		borderColor: '#DDB58E',
		borderRadius: 15,
	},
})
