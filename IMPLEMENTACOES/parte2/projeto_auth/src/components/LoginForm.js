import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, MyButton, MyInput } from './commons'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', senha: '' }
    }

    acaoBotao(){
        alert(this.state.email);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <MyInput
                        label = 'E-mail'
                        placeholder='Entre com seu e-mail'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>

                <CardItem>
                    <MyInput
                        label = 'Senha'
                        placeholder='Entre com sua senha'
                        secureTextEntry={true}
                        onChangeText={senha => this.setState({ senha })}
                    />
                </CardItem>
                <Text>{this.state.email}</Text>
                <CardItem>
                    <MyButton action={this.acaoBotao.bind(this)}>
                        Log in
                   </MyButton>
                </CardItem>
            </Card>
        );
    }
}