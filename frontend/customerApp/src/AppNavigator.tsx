import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninFlow from './screens/Signin/flow';
import SignupFlow from './screens/Signup/flow';
import HomeFlow from './screens/Home/flow';


export type RootStackParamList = {
  Signup: undefined;
  Signin: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupFlow} />
      <Stack.Screen name="Signin" component={SigninFlow} />
      <Stack.Screen name="Home" component={HomeFlow} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator; 