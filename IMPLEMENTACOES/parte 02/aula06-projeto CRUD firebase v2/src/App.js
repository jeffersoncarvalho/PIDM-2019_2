import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/commons';
import firebase_key from './keys/firebase'

//import LivroMenuScreen from './components/LivroMenuScreen';
import Routes from './components/Routes';

export default class App extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

    if (!firebase.apps.length) {
      firebase.initializeApp(
        firebase_key
      );
    }//conexao com o firebase
  }

  render() {
    return (
      <Routes/>
    );
  }
}
