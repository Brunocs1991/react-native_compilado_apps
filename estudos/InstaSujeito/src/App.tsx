import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

class App extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Ola mundo</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
