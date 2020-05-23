import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../estilos/Estilos';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { login: null, senha: null };
    }

    static navigationOptions = {
        title: "Login"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Login
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu login"
                    onChangeText={(login) => this.setState({ login })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com sua senha"
                    onChangeText={(senha) => this.setState({ senha })}
                />
                
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => {
                            if(this.state.login=="aluno" && this.state.senha=="ufc"){
                                this.props.navigation.navigate("MenuScreen");
                            }else
                                this.props.navigation.navigate("LoginErroScreenModal",{login:this.state.login});
                        }}
                    />
                </View>
            </View>
        );
    }
}