import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Cartao, CartaoItem, MeuBotao, MeuSpinner } from './components/commons';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: null };

  }


  componentDidMount() {
    

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.setState({ loggedIn: true });
          //alert("SUCESSO!")
        } else {
          this.setState({ loggedIn: false });
          //alert("FALHOU")
        }

      });
  }

  renderConteudo() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Cartao>
            <CartaoItem>
              <MeuBotao
                onPress={()=>firebase.auth().signOut()}
              >
                Log Out
			      </MeuBotao>
            </CartaoItem>
          </Cartao>);
      case false:
        return <LoginForm />;
      default:
        return <Cartao><CartaoItem><MeuSpinner/></CartaoItem></Cartao>
    }
  }

  render() {
    return (
      <View>
        <Header titulo='Autenticação com Firebase' />
        {this.renderConteudo()}
      </View>
    );
  }
}
