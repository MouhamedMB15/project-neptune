import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/features/auth/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}