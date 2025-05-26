import React from 'react';

import {  ScrollView, Text, Button, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
			<Header/>
			<Text style={styles.paragraph}>
				This is a paragraph of sample text meant to simulate content in your React Native app.
			</Text>

			<TextInput
				style={styles.input}
				placeholder="Enter some text"
			/>

			<Button title="Click Me" onPress={() => {}} />

			<Image
				source={{ uri: 'https://via.placeholder.com/150' }}
				style={styles.image}
			/>

			<Text style={styles.paragraph}>
				Another paragraph to check scrolling functionality and layout.
			</Text>

			<Button title="Submit" onPress={() => {}} />

			<Text style={styles.footer}>End of Dummy Content</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black'
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
    marginVertical: 12,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 24,
    textAlign: 'center',
  },
});



export default App;
