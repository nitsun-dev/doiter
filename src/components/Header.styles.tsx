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
    fontSize: responsiveFontSize(52),
    fontWeight: 'bold',
    color: '#0D2456',
  },
  date: {
    fontSize: responsiveFontSize(16),
    color: '#626262',
  },
});

export default styles;