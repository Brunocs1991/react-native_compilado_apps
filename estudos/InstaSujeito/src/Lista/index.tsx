import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feed} from '../types/Feed.ts';

interface Props {
  data: Feed;
}

interface State {
  feed: Feed;
}

class Lista extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
  }

  carregaIcone(likeada: boolean) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }
  like() {
    let feed = this.state.feed;
    if (feed.likeada) {
      feed.likeada = false;
      feed.likers = feed.likers - 1;
    } else {
      feed.likeada = true;
      feed.likers = feed.likers + 1;
    }
    this.setState({feed: feed});
  }

  mostraLikes(likers: number) {
    if (likers <= 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{uri: this.state.feed.imgPerfil}}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode={'cover'}
          source={{uri: this.state.feed.imgPublicacao}}
          style={styles.fotoPublicacao}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.carregaIcone(this.state.feed.likeada)}
              style={styles.icones}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image source={require('../img/send.png')} style={styles.icones} />
          </TouchableOpacity>
        </View>
        {this.mostraLikes(this.state.feed.likers)}
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  viewPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  icones: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Lista;
