import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

type TypePropsReceiveData = {};
type TypeStateReceiveData = {
  nome: string;
  input: string;
};

class ReceiveData extends Component<
  TypePropsReceiveData,
  TypeStateReceiveData
> {
  constructor(props: Readonly<TypePropsReceiveData> | TypePropsReceiveData) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      Alert.alert('Importante', 'Digite seu nome!');
      return;
    }
    this.setState({nome: `Bem vindo: ${this.state.input}`});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digile seu nome?"
          placeholderTextColor="#FFF"
          underlineColorAndroid={'transparent'}
          onChangeText={input => this.setState({input: input})}
        />
        <Button title={'Entrar'} onPress={this.entrar} />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    margin: 10,
    fontSize: 20,
    padding: 10,
    color: '#FFF',
  },
  texto: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default ReceiveData;
