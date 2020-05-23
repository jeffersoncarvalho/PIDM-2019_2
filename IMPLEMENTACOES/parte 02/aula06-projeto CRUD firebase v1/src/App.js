import React, {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';

import firebase_key from './keys/firebase';

import Routes from './components/Routes'

export default class App extends Component{

  constructor(props){
    super(props); 
  }

  componentDidMount(){
    if(!firebase.apps.length){
      firebase.initializeApp(firebase_key);
    }
  }

  render(){
    return(
      <Routes/>
    )
  }
}