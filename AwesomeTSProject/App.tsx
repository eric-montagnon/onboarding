/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Drink = {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
};

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Drink[]>([]);

  const getDrinks = async () => {
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
      );
      const json = await response.json();
      setData(json.drinks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: item.strDrinkThumb,
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}> {item.strDrink}</Text>
                <Text style={styles.description}> {item.strCategory}</Text>
              </View>
            </View>
          )}
        />
      )}
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
