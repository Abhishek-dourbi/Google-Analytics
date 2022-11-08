/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 20,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={() => {}}>
            <Text>Button One</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={() => {}}>
            <Text>Button Two</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={() => {}}>
            <Text>Button Three</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={() => {}}>
            <Text>Button Four</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
