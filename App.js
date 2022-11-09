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

import analytics from '@react-native-firebase/analytics';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const logEvent = (name, payload) => () => {
    analytics().logEvent(name, payload);
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
            onPress={logEvent('add_to_cart', {
              currency: 'INR',
              value: 100,
              items: [
                {
                  item_id: 'item_1',
                  quantity: 2,
                  item_name: 'Men Shirt',
                  item_brand: 'Adidas',
                  item_category: 'Shirt',
                },
              ],
            })}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={logEvent('select_item', {
              item_list_id: 'item_list_1',
              items: [
                {
                  item_id: 'item_1',
                  quantity: 2,
                  item_name: 'Men Shirt',
                  item_brand: 'Adidas',
                  item_category: 'Shirt',
                },
              ],
            })}>
            <Text>Select Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={logEvent('purchase', {
              currency: 'INR',
              shipping: 20,
              tax: 10,
              value: 100,
              transaction_id: '69',
              items: [
                {
                  item_id: 'item_1',
                  quantity: 2,
                  item_name: 'Men Shirt',
                  item_brand: 'Adidas',
                  item_category: 'Shirt',
                },
              ],
            })}>
            <Text>Purchase</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={logEvent('login', {
              method: 'facebook',
            })}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            onPress={logEvent('custom_event', {
              attr1: '123',
              attr2: '345',
            })}>
            <Text>Custom</Text>
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
