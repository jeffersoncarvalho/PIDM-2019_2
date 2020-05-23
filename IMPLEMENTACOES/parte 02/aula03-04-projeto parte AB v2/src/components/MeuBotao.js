import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class MeuBotao extends Component {
    render() {
        return (
            <TouchableOpacity style={estilos.estiloBotao}
                onPress={this.props.onPress}
            >
                    <Text style={estilos.estiloTexto}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const estilos = StyleSheet.create({
    estiloBotao : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    estiloTexto: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
});