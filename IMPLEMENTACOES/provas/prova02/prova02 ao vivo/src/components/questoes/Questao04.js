import React, {Component} from 'react';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from '../commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao04 extends Component{

  static navigationOptions = {
    title: "Editar Aluno"
  };

  constructor(props){
    super(props);
    const aluno = this.props.navigation.getParam("aluno",null);
    
    this.state = {nome:aluno.nome,
                  idade:aluno.idade,
                  ap1:aluno.ap1,
                  ap2:aluno.ap2,
                  key:aluno.key,
                  loading:false}

  }

  updateAluno(){
    this.setState({loading:true})
    firebase.firestore().collection("alunos").doc(this.state.key)
    .set(
      {
       nome:this.state.nome,
       idade:this.state.idade,
       ap1:this.state.ap1,
       ap2:this.state.ap2 
      }
    )
    .then(()=>{
      this.setState({loading:false});
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
              onPress={()=>this.updateAluno()}
            >
              Atualizar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Alunos" />
        <CartaoItem>
          <MeuInput label="Nome" value={this.state.nome} 
          onChangeText={(nome)=>this.setState({nome})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Idade" value={this.state.idade+""}
          onChangeText={(idade)=>this.setState({idade})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="AP1" value={this.state.ap1+""}
          onChangeText={(ap1)=>this.setState({ap1})}
          keyboardType = "numeric"
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="AP2" value={this.state.ap2+""}
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