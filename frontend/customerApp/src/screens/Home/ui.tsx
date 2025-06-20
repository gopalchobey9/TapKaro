import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HomeUIProps } from './types';

const HomeUI: React.FC<HomeUIProps> = ({ onSignout }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome Home!</Text>
    <Button title="Sign Out" onPress={onSignout} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HomeUI; 