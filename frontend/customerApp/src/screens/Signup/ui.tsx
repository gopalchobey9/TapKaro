import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SignupUIProps } from './types';

const SignupUI: React.FC<SignupUIProps> = ({ email, setEmail, password, setPassword, onSignup, onNavigateSignin }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <Button title="Sign Up" onPress={onSignup} />
    <TouchableOpacity onPress={onNavigateSignin}>
      <Text style={styles.link}>Already have an account? Sign In</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { color: 'blue', marginTop: 15, textAlign: 'center' },
});

export default SignupUI; 