import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';

const Header: React.FC = () => {
  const today = new Date();

  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const dateString = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{dayName}</Text>
      <Text style={styles.date}>{dateString}</Text>
    </View>
  );
};

export default Header;