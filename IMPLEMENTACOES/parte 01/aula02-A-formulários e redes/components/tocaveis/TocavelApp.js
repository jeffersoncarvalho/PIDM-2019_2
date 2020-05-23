import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';

export default class TocavelApp extends Component {

    acaoBotao() {
        console.log("PRESSIONADO!");
    }

    acaoBotaoLongo() {
        console.log("PRESSIONADO LONGO!");
    }


    render() {
        return (
            <View style={estilos.container}>
                <TouchableHighlight onPress={() => this.acaoBotao()} underlayColor="white">
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => this.acaoBotao()}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                    onPress={() => this.acaoBotao}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableNativeFeedback
                    onPress={() => this.acaoBotao()}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});