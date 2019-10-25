import React, { Component } from 'react';
import { Text } from 'react-native';
import { Cartao, CartaoItem, MeuBotao, MeuInput } from './commons'

import firebase from 'firebase';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", senha: "", error:""};
    }

    acaoBotao(){
       // alert("Funciona!");
       firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
       .catch((error)=>{
           this.setState({error:error.message})
           firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
           .catch((error)=>{
                this.setState({error:error.message})
           });

       });
    }

    render() {
        return (
            <Cartao>
                <CartaoItem>
                    <MeuInput
                        label="E-mail"
                        placeholder='Entre com seu e-mail'
                        onChangeText={email => this.setState({ email })}
                    />
                </CartaoItem>
                <CartaoItem>
                    <MeuInput
                        label="Senha"
                        placeholder='Entre com sua senha'
                        onChangeText={senha => this.setState({ senha })}
                        secureTextEntry={true}
                    />
                </CartaoItem>
                <Text>{this.state.error}</Text>
                <CartaoItem>
                    <MeuBotao
                        onPress={this.acaoBotao.bind(this)}
                    >
                        Log in
                   </MeuBotao>
                </CartaoItem>
            </Cartao>
        );
    }
}