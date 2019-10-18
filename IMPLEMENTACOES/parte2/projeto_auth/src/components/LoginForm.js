import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, MyButton, MyInput, MySpinner } from './commons';
import firebase from 'firebase';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', senha: '', error: '', loading: false }
    }

    acaoBotao() {
        this.setState({ error: '', loading: true });
        //alert(this.state.email);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch(() => { //problema no e-mail e na senha
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                    .catch((error) => { //algum problema na criação do usuário
                        this.setState({ error: error.message })
                    });
            });
    }

    renderBotao() {
        if (this.state.loading) {
            return <MySpinner size='small' />;
        }
        return (
            <MyButton action={this.acaoBotao.bind(this)}>
                Log in
            </MyButton>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <MyInput
                        label='E-mail'
                        placeholder='Entre com seu e-mail'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>

                <CardItem>
                    <MyInput
                        label='Senha'
                        placeholder='Entre com sua senha'
                        secureTextEntry={true}
                        onChangeText={senha => this.setState({ senha })}
                    />
                </CardItem>
                <Text style={{ fontSize: 20, color: 'red', alignSelf: "center" }}>
                    {this.state.error}
                </Text>
                <CardItem>
                    {this.renderBotao()}
                </CardItem>
            </Card>
        );
    }
}