import React, {Component} from 'react';
import {View,Text} from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from './commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class ProdutoEditarScreen extends Component{

  static navigationOptions = {
    title: "Editar Produto"
  };

  constructor(props){
    super(props);
    const produto = this.props.navigation.getParam("produto",null);
    
    this.state = {nome:produto.nome,
                  categoria:produto.categoria,
                  preco:produto.preco,
                  key:produto.key,
                  loading:false}

  }

  updateProduto(){
    this.setState({loading:true})
    firebase.firestore().collection("produtos").doc(this.state.key)
    .set(
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
    ;
  }

  renderBotao(){
    if(this.state.loading){
      return <MeuSpinner/>
    }
    return (<MeuBotao
              onPress={()=>this.updateProduto()}
            >
              Atualizar
            </MeuBotao>)
  }

  render(){
    return(
      <Cartao>
        <Header titulo="Sistema de Produtos" />
        <CartaoItem>
          <MeuInput label="Nome" value={this.state.nome} 
          onChangeText={(nome)=>this.setState({nome})}/>
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Categoria" value={this.state.categoria}
          onChangeText={(categoria)=>this.setState({categoria})}
          />
        </CartaoItem>
        <CartaoItem>
          <MeuInput label="Preço" value={this.state.preco+""}
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