import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { store } from './Services/Store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Test, { AddData } from './Test';

export default function App() {
// console.log(error);
  return (
    <Provider store={store}>
      {/* <Test/> */}
      <AddData/>
    </Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
