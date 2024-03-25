import {Component} from 'react';
import FlatListApp from './FlatListApp.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

class App extends Component<any, any> {
  render() {
    return (
      <>
        {/*<ScrollViewApp />;*/}
        <GestureHandlerRootView style={{flex: 1}}>
          <FlatListApp />
        </GestureHandlerRootView>
      </>
    );
  }
}

export default App;
