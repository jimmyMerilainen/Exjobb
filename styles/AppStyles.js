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
		fontSize: 24,
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
	success: {
		color: 'green',
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
	/* Scorecard */
	scoreCard: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		width: '85%',
		alignSelf: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#DDB58E',
	},
	line: {
		width: 1,
		height: 30,
		borderLeftWidth: 1,
		borderColor: '#DDB58E',
		opacity: 0.18,
	},
	box: {
		margin: 4,
		width: '15%',
		height: '65%',
	},
	box2: {
		margin: 4,
		width: '40%',
		height: '75%',
	},
	/* Modal Overlay */
	modalView: {
		height: 550,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		marginBottom: 100,
		width: '85%',
		backgroundColor: 'white',
		alignSelf: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	registerView: {
		width: '85%',
		height: 50,
		marginBottom: 20,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
	},
})
