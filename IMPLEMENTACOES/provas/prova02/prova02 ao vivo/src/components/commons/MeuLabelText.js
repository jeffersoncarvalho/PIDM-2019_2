import React,{Component} from 'react';
import {View,Text,TextInput, StyleSheet} from 'react-native';

class MeuLabelText extends Component{
    render(){
        return(
            <View style={estilos.containerEstilo}>
                <Text style={estilos.labelEstilo}>{this.props.label}</Text>
                <Text style={estilos.inputEstilo}>{this.props.conteudo}</Text>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    containerEstilo:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height:40
    },
    labelEstilo:{
        fontSize:18,
        paddingLeft:10,
        flex:1,
        fontWeight:"bold"
    },
    inputEstilo:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:3
    }
})

export {MeuLabelText}