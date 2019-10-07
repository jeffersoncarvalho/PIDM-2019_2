import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={this.props.action}
                style={estilos.buttonStyle}>
      
                <Text style={estilos.textStyle}>{this.props.children}</Text>
            
            </TouchableOpacity>
        );
    }
}

const estilos = StyleSheet.create({
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
});

export {MyButton}