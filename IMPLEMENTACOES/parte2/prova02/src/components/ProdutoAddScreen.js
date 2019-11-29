import React, {Component} from 'react';
import {View,Text} from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from './commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class ProdutoAddScreen extends Component{

  static navigationOptions = {
    title: "Adicionar Produto"
  };

  constructor(props){
    super(props);
    this.state = {nome:"",categoria:"",preco:0.0,loading:false};
  }

  adicionarProduto(){
    this.setState({loading:true});
    firebase.firestore().collection('produtos')
    .add(
      {
        nome:this.state.nome,
        categoria:this.state.categoria,
        preco:this.state.preco
      }
    )
    .then(()=>{
      this.setState({loading:false});
    })
    .catch(()=>{
      this.setState({loading:false});
    })
  }

  renderBotao(){
    if(this.state.loading){
      return <MeuSpinner/>
    }
    return (<MeuBotao
              onPress={()=>this.adicionarProduto()}
            >
              Adicionar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Produtos" />
        <CartaoItem>
          <MeuInput label="Nome"  
          onChangeText={(nome)=>this.setState({nome})}/>
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Categoria" 
          onChangeText={(categoria)=>this.setState({categoria})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Preço" 
          onChangeText={(preco)=>this.setState({preco})}
          />
        </CartaoItem>
        <CartaoItem>
          {this.renderBotao()}
        </CartaoItem>
      </Cartao>
    )
  }
}