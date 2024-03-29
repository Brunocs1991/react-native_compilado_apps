import {Component} from 'react';
import Pessoas from './Pessoas.tsx';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

type PessoaType = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};
type FlatListAppProps = {};
type FlatListAppState = {
  feed: PessoaType[];
};

class FlatListApp extends Component<FlatListAppProps, FlatListAppState> {
  constructor(props: FlatListAppProps) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'João',
          idade: 30,
          email: 'rHbXt@example.com',
        },
        {
          id: '2',
          nome: 'Maria',
          idade: 25,
          email: 'q2q6W@example.com',
        },
        {
          id: '3',
          nome: 'Joaquim',
          idade: 40,
          email: 'rHbXt@example.com',
        },
        {
          id: '4',
          nome: 'pedro',
          idade: 50,
          email: 'asdf@example.com',
        },
        {
          id: '5',
          nome: 'henrique',
          idade: 50,
          email: '5a1sd@example.com',
        },
        {
          id: '6',
          nome: 'pedro',
          idade: 50,
          email: 'asdf@example.com',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Pessoas data={item} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FlatListApp;
