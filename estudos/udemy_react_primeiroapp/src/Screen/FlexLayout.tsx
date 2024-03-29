import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TypeFlexLayoutProps = {};
type TypeFlexLayoutState = {};

class FlexLayout extends Component<TypeFlexLayoutProps, TypeFlexLayoutState> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area1} />
        <View style={styles.area2} />
        <View style={styles.area3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  area1: {
    height: 50,
    width: 50,
    backgroundColor: '#00FF00',
  },
  area2: {
    height: 50,
    width: 50,
    backgroundColor: '#ff0000',
  },
  area3: {
    height: 50,
    width: 50,
    backgroundColor: '#ffff00',
  },
});
export default FlexLayout;
