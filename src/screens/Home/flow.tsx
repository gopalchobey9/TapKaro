import React from 'react';
import HomeUI from './ui';
import { signout } from '../../actions/authActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';
import { useNavigation } from '@react-navigation/native';

const HomeFlow = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const handleSignout = () => {
    signout();
    navigation.navigate('Signin');
  };

  return <HomeUI onSignout={handleSignout} />;
};

export default HomeFlow; 