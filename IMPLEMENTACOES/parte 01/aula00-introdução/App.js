import React, {Component} from 'react'
import {View,StyleSheet} from 'react-native'

import HelloWorld from './components/HelloWorld'
import Heroi from './components/Heroi'

export default class App extends Component{
  render(){
    return (
      <View style={[estilos.container,estilos.container2]}>
        <HelloWorld 
          mensagem='Aula de React'
        />
        <Heroi nome='Capitão América'/>
        <Heroi nome='Hulk'/>
        <Heroi nome='Thor'/>
        <Heroi nome='Batman'/>
        <Heroi nome='Fofão'/>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container:{
    backgroundColor: '#ccc',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2:{
    backgroundColor: 'red'
  }
});