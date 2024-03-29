import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TypeGrupoStyleProps = {};

type TypeGrupoStyleState = {};

class GrupoStyle extends Component<TypeGrupoStyleProps, TypeGrupoStyleState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>
          Eu sou texto 1
        </Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text style={styles.textoPrincipal}>Eu sou texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  textoPrincipal: {
    fontSize: 25,
    color: '#ff0000',
  },
  alinhaTexto: {
    textAlign: 'center',
  },
});
export default GrupoStyle;
