import React, { useState } from 'react';
import SigninUI from './ui';
import { signin } from '../../actions/authActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';

const SigninFlow = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Signin'>>();

  const handleSignin = () => {
    signin({ email, password });
    navigation.navigate('Home');
  };

  return (
    <SigninUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSignin={handleSignin}
      onNavigateSignup={() => navigation.navigate('Signup')}
    />
  );
};

export default SigninFlow; 