import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BASE_WIDTH = 393;
const scale = width / BASE_WIDTH;

console.log('scale:', scale);

const responsiveFontSize = (size: number) => Math.round(size * scale);
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginBottom: 16,
	},
	day: {
		paddingTop: '2.5%',
		fontSize: responsiveFontSize(58),
		fontFamily: 'Karla-Bold',
		color: '#0D2456',
	},
	date: {
		fontSize: responsiveFontSize(18),
		fontFamily: 'Karla-SemiBold',
		color: '#626262',
		marginTop: '-2.5%',
		paddingBottom: '2.5%',
	},
});

export default styles;