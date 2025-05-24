/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import { View, ScrollView, Text, Button, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>Welcome to the Dummy Page</Text>

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
