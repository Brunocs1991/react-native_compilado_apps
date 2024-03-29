import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type pessoaProps = {
  data: PessoaType;
};
type pessoaState = {};
type PessoaType = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};
class Pessoas extends Component<pessoaProps, pessoaState> {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Pessoas;
