import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Boa noite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
