import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SigninUIProps } from './types';

const SigninUI: React.FC<SigninUIProps> = ({ email, setEmail, password, setPassword, onSignin, onNavigateSignup }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>
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
    <Button title="Sign In" onPress={onSignin} />
    <TouchableOpacity onPress={onNavigateSignup}>
      <Text style={styles.link}>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { color: 'blue', marginTop: 15, textAlign: 'center' },
});

export default SigninUI; 