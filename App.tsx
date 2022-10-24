import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const add = (number: number) => {
    setCount(oldCount => oldCount + number);
  };

  const subtract = (number: number) => {
    setCount(oldCount => oldCount - number);
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.header}>Counter</Text>
        <Text style={style.count}>{count}</Text>
        <View style={style.buttonContainer}>
          <Button title="-3" onPress={() => subtract(3)} />
          <Button title="-" onPress={() => subtract(1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
          <Button title="+" onPress={() => add(1)} />
          <Button title="+3" onPress={() => add(3)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default App;
