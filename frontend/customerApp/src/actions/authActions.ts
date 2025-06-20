import AppDispatcher from '../dispatcher/AppDispatcher';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthActionTypes = {
  SIGNUP: 'SIGNUP',
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
};

const API_URL = 'http://10.0.2.2:5050/auth'; // Changed backend port to 5000

export const signup = async (userData: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userData.email, password: userData.password }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      return { success: false, error: errorText || 'Signup failed' };
    }
    AppDispatcher.dispatch({
      type: AuthActionTypes.SIGNUP,
      payload: userData,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : 'Network or unknown error' };
  }
};

// Helper for authenticated requests
export const fetchWithAuth = async (url: string, options: any = {}) => {
  const token = await AsyncStorage.getItem('jwt');
  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const signin = async (userData: { email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userData.email, password: userData.password }),
    });
    if (!response.ok) throw new Error('Signin failed');
    const token = await response.text();
    await AsyncStorage.setItem('jwt', token);
    AppDispatcher.dispatch({
      type: AuthActionTypes.SIGNIN,
      payload: userData,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const signout = async () => {
  await AsyncStorage.removeItem('jwt');
  AppDispatcher.dispatch({
    type: AuthActionTypes.SIGNOUT,
  });
};