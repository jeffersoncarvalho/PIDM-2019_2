import React,{Component} from 'react';
import {View,Text,TextInput, StyleSheet} from 'react-native';

class MeuInput extends Component{
    render(){
        return(
            <View style={estilos.containerEstilo}>
                <Text style={estilos.labelEstilo}>{this.props.label}</Text>
                <TextInput
                        style={estilos.inputEstilo}
                        {...this.props}
                    />
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
        fontSize:14,
        paddingLeft:10,
        flex:1,
        fontWeight:"bold"
    },
    inputEstilo:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:14,
        lineHeight:23,
        flex:3
    }
})

export {MeuInput}