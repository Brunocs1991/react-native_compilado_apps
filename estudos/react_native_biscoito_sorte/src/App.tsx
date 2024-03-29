import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';

type AppProps = {};
type AppState = {
  textoFrase: string;
  img: ImageSourcePropType;
};

class App extends Component<AppProps, AppState> {
  private readonly frases: string[];
  constructor(props: Readonly<AppProps> | AppProps) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./public/img/biscoito.png'),
    };
    this.frases = [
      'Siga os bons e aprendera com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso',
    ];
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito() {
    let randomNumber = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: ' "' + this.frases[randomNumber] + ' "',
      img: require('./public/img/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22',
  },
});
