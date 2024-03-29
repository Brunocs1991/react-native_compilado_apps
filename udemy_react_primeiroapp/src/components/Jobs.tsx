import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

type JobsProps = {
  largura: number;
  altura: number;
  nome: string;
};

class Jobs extends Component<JobsProps, any> {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}

export default Jobs;
