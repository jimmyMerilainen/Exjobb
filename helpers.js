import Toast from 'react-native-root-toast'
import AppStyles from './styles/AppStyles'
import { getDistance, convertDistance } from 'geolib'

/** ConvertResponseText(string: text)
 * Insert firebase error message to translate to swedish
 */
export function convertResponseText(text) {
	if (text === 'Firebase: Error (auth/user-not-found).') {
		return 'Avändare finns inte'
	}
	if (text === 'Firebase: Error (auth/wrong-password).') {
		return 'Fel lösenord'
	}
	if (text === 'Firebase: Error (auth/internal-error).') {
		return 'Fyll i alla fält'
	}
	if (text === 'Firebase: Error (auth/missing-email).') {
		return 'Fyll i din email address'
	}
	if (text === 'Firebase: Error (auth/invalid-email).') {
		return 'Ingen giltlig email address'
	}
	if (
		text ===
		'Firebase: Password should be at least 6 characters (auth/weak-password).'
	) {
		return 'Lösenordet ska vara minst 6 karaktärer'
	}
	if (text === 'Firebase: Error (auth/admin-restricted-operation).') {
		return 'Något gick helt fel..'
	} else {
		return text
	}
}

/** showToast(string: message, boolean: success)
 * Insert message to display
 * Insert true/false for color: green/red
 * Needs to be wrapped with <RootSiblingParent>
 */
export function showToast(message, success) {
	let toast = Toast.show(message, {
		position: -150,
		shadow: true,
		animation: true,
		hideOnPress: true,
		backgroundColor: 'rgba(196, 196, 196, 0.6)',
		textColor: success ? AppStyles.success.color : AppStyles.warning.color,
	})
	setTimeout(function () {
		Toast.hide(toast)
	}, 5000)
}

/** getLocationDistance(object: currentLatlong, object: toLatLang)
 * currentLatLang object with latitude and longitude
 * toLatLang object with latitude and longitude
 * calculating distance in kilometers from point currentLatlong to toLatLang
 */
export function getLocationDistance(currentLatLong, toLatLang) {
	return convertDistance(getDistance(currentLatLong, toLatLang, 100), 'km')
}
