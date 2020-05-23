import React, {Component} from 'react';
import {View} from 'react-native';

import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default class App extends Component {
  render(){
    return(
      <View>
        <Cabecalho nome='Jefferson'
                   curso='Design Digital'/>
        <Corpo />
        <Disciplina disciplina='Cálculo I' />
        <Disciplina disciplina='Cálculo II' />
        <Disciplina disciplina='Cálculo III' />
      </View>
    );
  }
}


