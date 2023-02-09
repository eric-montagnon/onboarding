/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import * as data from './myFile.json';
const drink1 = data.drinks[0];
const drink2 = data.drinks[1];
const drink3 = data.drinks[2];

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: drink1.strDrinkThumb,
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}> {drink1.strDrink}</Text>
          <Text style={styles.description}> {drink1.strCategory}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: drink2.strDrinkThumb,
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}> {drink2.strDrink}</Text>
          <Text style={styles.description}> {drink2.strCategory}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: drink3.strDrinkThumb,
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}> {drink3.strDrink}</Text>
          <Text style={styles.description}> {drink3.strCategory}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 10,
  },
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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: 'green',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  description: {
    color: 'black',
    fontSize: 12,
  },
});

export default App;
