import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface AppProps {}

interface AppState {
  input: string;
  nome: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      input: '',
      nome: '',
    };
    this.gravarNome = this.gravarNome.bind(this);
  }

  gravarNome() {
    this.setState({
      nome: this.state.input,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={text => this.setState({input: text})}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginRight: 10,
    marginLeft: -6,
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default App;
