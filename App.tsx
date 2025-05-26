import React, {useEffect } from 'react';

import {  ScrollView, Text, Button, Image, TextInput, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

function App(): React.JSX.Element {
	useEffect(() => {
		changeNavigationBarColor('#f5f5f5');
	}, []);

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar
				backgroundColor= '#f5f5f5'
			/>
			<Header/>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				
			</ScrollView>
		</SafeAreaView>
	);
}



const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	scrollContent: {
		padding: 16,
		flexGrow: 1,
	}, 
});



export default App;
