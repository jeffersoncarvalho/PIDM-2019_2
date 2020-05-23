import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../estilos/Estilos'

export default class IMC extends Component {

    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null }
    }

    static navigationOptions = {
        title: "IMC"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.tituloMenor}>
                    Índice de Massa Corpórea
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com sua altura (Ex.: 1.85)"
                    onChangeText={(altura) => this.setState({ altura })}
                    keyboardType={"numeric"}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu peso (Kg)"
                    onChangeText={(peso) => this.setState({ peso })}
                    keyboardType={"numeric"}
                />
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("ResultadoModal",
                            {
                                altura: this.state.altura,
                                peso: this.state.peso
                            })}
                    />
                </View>
            </View>
        );
    }
}