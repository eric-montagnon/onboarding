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
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Searchbar} from 'react-native-paper';

type Drink = {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
};

async function getDrinks(
  text: string,
  setData: React.Dispatch<React.SetStateAction<Drink[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + text,
    );
    const json = await response.json();
    setData(json.drinks);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Drink[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getDrinks('punch', setData, setLoading);
  }, []);

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{height: 100}}>
        <Searchbar
          icon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3076/3076134.png',
          }}
          style={{margin: 24, backgroundColor: 'lightgrey'}}
          placeholder="Search"
          onChangeText={text => {
            setInput(text);
            getDrinks(text, setData, setLoading);
          }}
          value={input}
        />
        <StatusBar />
      </View>
      <View
        style={{
          backgroundColor: 'lightgrey',
          borderRadius: 10,
          marginHorizontal: 24,
          marginBottom: 250,
        }}>
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
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text style={styles.title}> {item.strDrink}</Text>
                  <Text style={styles.description}> {item.strCategory}</Text>
                </View>
              </View>
            )}
          />
        )}
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
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  item: {
    flexDirection: 'row',
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
