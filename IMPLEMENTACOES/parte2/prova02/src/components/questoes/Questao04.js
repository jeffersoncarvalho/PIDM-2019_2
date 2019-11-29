import React, {Component} from 'react';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from '../commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao04 extends Component{

  static navigationOptions = {
    title: "Editar Computador"
  };

  constructor(props){
    super(props);
    const computador = this.props.navigation.getParam("computador",null);
    //alert(computador.processador);
    
    this.state = {processador:computador.processador,
                  memoria:computador.memoria,
                  clock:computador.clock,
                  cache:computador.cache,
                  key:computador.key,
                  loading:false}

  }

  updateComputador(){
    this.setState({loading:true})
    firebase.firestore().collection("computadores").doc(this.state.key)
    .set(
      {
       processador:this.state.processador,
       memoria:this.state.memoria,
       clock:this.state.clock,
       cache:this.state.cache 
      }
    )
    .then(()=>{
      this.setState({loading:false});
      alert("Registro editado com sucesso!");
      this.props.navigation.navigate("Questao02");
    })
    .catch(()=>{
      this.setState({loading:false});
    })
    ;
  }

  renderBotao(){
    if(this.state.loading){
      return <MeuSpinner/>
    }
    return (<MeuBotao
              onPress={()=>this.updateComputador()}
            >
              Atualizar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Computadores" />
        <CartaoItem>
          <MeuInput label="Processador" value={this.state.processador} 
          onChangeText={(processador)=>this.setState({processador})}/>
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Memória" value={this.state.memoria+""}
          onChangeText={(memoria)=>this.setState({memoria})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Clock" value={this.state.clock+""}
          onChangeText={(clock)=>this.setState({clock})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Cache" value={this.state.cache+""}
          onChangeText={(cache)=>this.setState({cache})}
          />
        </CartaoItem>
        <CartaoItem>
          {this.renderBotao()}
        </CartaoItem>
      </Cartao>
    )
  }
}