import React from 'react';
import { RootStack } from './src/common/RootStack';
import { Provider } from 'react-redux';
import { createAppStore } from './src/common/createStore';


export default class App extends React.Component {
  store = createAppStore();

  render() {
    return (
      <Provider store={this.store}>
        <RootStack />
      </Provider>
    );
  }
}