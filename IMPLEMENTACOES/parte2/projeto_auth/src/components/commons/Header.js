import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={estilos.viewStyle}>
                <Text style={estilos.textStyle}> {this.props.title} </Text>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        height : 60,
        width:"100%",
        shadowColor: "#000",
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    textStyle: {
        fontSize: 20
    }
});

export {Header}