import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default App;
