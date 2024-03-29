import {Text, View} from 'react-native';
import Jobs from '../components/Jobs.tsx';
import React, {Component} from 'react';

class Inicial extends Component {
  render() {
    let nome = 'Bruno';
    return (
      <View>
        <Text>Olá Mundo!!!</Text>
        <Text>Meu Primeiro APP</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Sujeito Programador
        </Text>
        <Text style={{fontSize: 30}}>{nome}</Text>
        <Jobs largura={500} altura={200} nome="Steve Jobs" />
      </View>
    );
  }
}

export default Inicial;
