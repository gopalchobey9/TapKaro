import React, { useState } from 'react';
import SigninUI from './ui';
import { signin } from '../../actions/authActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const SigninFlow = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Signin'>>();

  const validate = () => {
    if (!username) {
      Alert.alert('Validation Error', 'Username is required');
      return false;
    }
    return true;
  };

  const handleSignin = async () => {
    if (!validate()) return;
    const success = await signin({ email: username, password });
    if (success) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Signin Failed', 'Invalid credentials or network error');
    }
  };

  return (
    <SigninUI
      email={username}
      setEmail={setUsername}
      password={password}
      setPassword={setPassword}
      onSignin={handleSignin}
      onNavigateSignup={() => navigation.navigate('Signup')}
    />
  );
};

export default SigninFlow;