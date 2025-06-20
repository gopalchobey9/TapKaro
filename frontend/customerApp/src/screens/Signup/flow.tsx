import React, { useState } from 'react';
import SignupUI from './ui';
import { signup } from '../../actions/authActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';

const SignupFlow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Signup'>>();

  const handleSignup = () => {
    signup({ email, password });
    navigation.navigate('Home');
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