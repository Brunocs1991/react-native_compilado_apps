import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

class ScrollViewApp extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box4} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box4} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    height: 250,
    backgroundColor: '#ff0000',
  },
  box2: {
    height: 250,
    backgroundColor: '#00ff00',
  },
  box3: {
    height: 250,
    backgroundColor: '#ffff00',
  },
  box4: {
    height: 250,
    backgroundColor: '#0000ff',
  },
});

export default ScrollViewApp;
