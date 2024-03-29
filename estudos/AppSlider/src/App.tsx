import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppProps} from './types/AppProps.ts';
import {AppState} from './types/AppState.ts';
import Slider from '@react-native-community/slider';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      valor: 50,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={valorSelecionado =>
            this.setState({valor: valorSelecionado})
          }
          value={this.state.valor}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#ff0000"
        />
        <Text style={styles.texto}>
          Você tem {this.state.valor.toFixed(1)} kg
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
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});
export default App;
