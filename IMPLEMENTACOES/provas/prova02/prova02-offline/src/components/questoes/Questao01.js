import React, {Component} from 'react';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from '../commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao01 extends Component{

  static navigationOptions = {
    title: "Adicionar Computador"
  };

  constructor(props){
    super(props);
    this.state = {processador:"",memoria:0.0,clock:0.0,cache:0.0,loading:false};
  }

  adicionarComputador(){
    this.setState({loading:true});
    firebase.firestore().collection('computadores')
    .add(
      {
        processador:this.state.processador,
        memoria:this.state.memoria,
        clock:this.state.clock,
        cache:this.state.cache
      }
    )
    .then(()=>{
      this.setState({loading:false});
      alert("Processador adicionado com sucesso!");
    })
    .catch(()=>{
      this.setState({loading:false});
      alert("Ocorreu um erro!");
    })
  }

  renderBotao(){
    if(this.state.loading){
      return <MeuSpinner/>
    }
    return (<MeuBotao
              onPress={()=>this.adicionarComputador()}
            >
              Adicionar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Computadores" />
        <CartaoItem>
          <MeuInput label="Processador"  
          onChangeText={(processador)=>this.setState({processador})}/>
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Memória" 
          onChangeText={(memoria)=>this.setState({memoria})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Clock" 
          onChangeText={(clock)=>this.setState({clock})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Cache" 
          onChangeText={(cache)=>this.setState({cache})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          {this.renderBotao()}
        </CartaoItem>
      </Cartao>
    )
  }
}