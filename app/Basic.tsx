import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {counter} from './store/basic/basic';
import {observer} from 'mobx-react-lite';

type Props = {
  counter: ReturnType<typeof counter>;
};

export const Basic = observer(({counter}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.countText}>{counter.count}</Text>
        <Button title="-" onPress={() => counter.decrement()} />
        <Button title="+" onPress={() => counter.increment()} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
    gap: 5,
  },
  countText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
