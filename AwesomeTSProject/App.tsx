/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.boxstyle}>
        <Text style={styles.text}> Hello !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding: 20,
    width: 200,
    backgroundColor: 'red',
    borderRadius: 100 / 2,
  },
  text: {
    color: 'green',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default App;
