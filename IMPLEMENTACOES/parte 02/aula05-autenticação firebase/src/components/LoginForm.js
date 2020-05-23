import React, { Component } from 'react';
import { Text } from 'react-native';
import { Cartao, CartaoItem, MeuBotao, MeuInput, MeuSpinner } from './commons'

import firebase from 'firebase';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", senha: "", error: "", loading: false};
    }

    acaoBotao(){
       // alert("Funciona!");
       this.setState({loading:true});
       firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
       .then(this.sucesso.bind(this))
       .catch((error)=>{
           this.setState({error:error.message})
           firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
           .then(this.sucesso.bind(this))
           .catch(this.falha.bind(this));

       });
    }

    sucesso(){
        this.setState({email: "", senha: "", error: "", loading: false});
    }

    falha(error){
        this.setState({error: error.message, loading: false});
    }

    renderBotao(){
        if(this.state.loading){
            return (<MeuSpinner size="small"/>);
        }
        return (<MeuBotao
                onPress={this.acaoBotao.bind(this)}>
                Log in
               </MeuBotao>);
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
                <Text style={{fontSize:16,color:'red'}}>{this.state.error}</Text>
                <CartaoItem>
                    {this.renderBotao()}
                </CartaoItem>
            </Cartao>
        );
    }
}