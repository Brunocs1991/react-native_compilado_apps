import React, {Component} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {AppProps} from './type/AppProps.ts';
import {AppState} from './type/AppState.ts';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={value => this.setState({status: value})}
          thumbColor={'#ff0000'}
        />
        <Text style={styles.text}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
