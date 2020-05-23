import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Piscar from './components/Piscar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {flag:false};

    setInterval( 
      ()=>{
        this.setState(
          estadoAnterior =>{
            return {flag:!estadoAnterior.flag};
          }
        );
      } 
      , 1000 );

  }
  
  render(){

    if (!this.state.flag) return null;

    return (
      <Piscar/>
    );

  }

  /*render() {
    return (
      <View style={{ 
                     justifyContent: 'flex-end',
                     
                     flex: 1,
                     flexDirection: 'row' }}>
        <View style={{ flex:1,backgroundColor: 'powderblue' }} />
        <View style={{ flex:1,backgroundColor: 'skyblue' }} />
        <View style={{ flex:1,backgroundColor: 'steelblue' }} />
      </View>
    );
  }*/

}