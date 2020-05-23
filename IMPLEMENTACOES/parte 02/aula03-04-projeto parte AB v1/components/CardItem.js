import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class CardItem extends Component {
    render() {
        return (
            <View style={estilos.containerEstilo}>
                {this.props.children}
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    containerEstilo: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
})