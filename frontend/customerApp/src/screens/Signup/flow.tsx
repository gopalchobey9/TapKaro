import React, { useState } from 'react';
import SignupUI from './ui';
import { signup } from '../../actions/authActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const SignupFlow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Signup'>>();

  const handleSignup = async () => {
    try {
      const result = await signup({ email, password });
      if (result.success) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Signup Failed', result.error || 'Signup failed or network error');
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred';
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <SignupUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSignup={handleSignup}
      onNavigateSignin={() => navigation.navigate('Signin')}
    />
  );
};

export default SignupFlow;