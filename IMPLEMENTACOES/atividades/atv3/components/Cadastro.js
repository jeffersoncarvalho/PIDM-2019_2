import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../estilos/Estilos'

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: null, idade: null, email: null };
    }

    static navigationOptions = {
        title: "Cadastro"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Cadastro
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu nome"
                    onChangeText={(nome) => this.setState({ nome })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com sua idade"
                    onChangeText={(idade) => this.setState({ idade })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu e-mail"
                    onChangeText={(email) => this.setState({ email })}
                />
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("Perfil",
                            {
                                nome: this.state.nome,
                                idade: this.state.idade,
                                email: this.state.email
                            }
                        )}
                    />
                </View>
            </View>
        );
    }
}