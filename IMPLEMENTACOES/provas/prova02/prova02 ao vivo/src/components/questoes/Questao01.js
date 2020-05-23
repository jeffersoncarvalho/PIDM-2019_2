import React, {Component} from 'react';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from '../commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao01 extends Component{

  static navigationOptions = {
    title: "Adicionar Aluno"
  };

  constructor(props){
    super(props);
    this.state = {nome:"",idade:0,ap1:0.0,ap2:0.0,loading:false};
  }

  adicionarAluno(){
    this.setState({loading:true});
    firebase.firestore().collection('alunos')
    .add(
      {
        nome:this.state.nome,
        idade:this.state.idade,
        ap1:this.state.ap1,
        ap2:this.state.ap2
      }
    )
    .then(()=>{
      this.setState({loading:false});
      alert("Aluno adicionado com sucesso!");
    })
    .catch(()=>{
      this.setState({loading:false});
      alert("Ocorreu um ERRO!");
    })
  }

  renderBotao(){
    if(this.state.loading){
      return <MeuSpinner/>
    }
    return (<MeuBotao
              onPress={()=>this.adicionarAluno()}
            >
              Adicionar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Alunos" />
        <CartaoItem>
          <MeuInput label="Nome"   
          onChangeText={(nome)=>this.setState({nome})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Idade"  
          onChangeText={(idade)=>this.setState({idade})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="AP1"  
          onChangeText={(ap1)=>this.setState({ap1})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="AP2"  
          onChangeText={(ap2)=>this.setState({ap2})}
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