import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

type StatePropsType = {};
type StateStateType = {
  nome: string;
};

class State extends Component<StatePropsType, StateStateType> {
  constructor(props: Readonly<StatePropsType> | StatePropsType) {
    super(props);
    this.state = {
      nome: '',
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome: string) {
    this.setState({nome});
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Button title={'Entrar'} onPress={() => this.entrar('Bruno')} />
        <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default State;
