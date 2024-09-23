/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import './app/services/unistyles';
import {
  Input,
  PrimaryButton,
  TextActionButton,
  TextButton,
} from './app/components';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, gap: 20, padding: 20}}>
        <PrimaryButton disabled label="Primary Button" />
        <TextButton label="Text Button" />
        <TextActionButton label="Label" actionText="Action" />
        <Input
          label="Label"
          errorMessage="error message"
          placeholder="Placeholder"
          secureTextEntry
          password
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
