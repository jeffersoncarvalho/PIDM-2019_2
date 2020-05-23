import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/Header'
import AlbumList from './components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Albums' />
        <AlbumList/>
      </View>

    );
  }
}

