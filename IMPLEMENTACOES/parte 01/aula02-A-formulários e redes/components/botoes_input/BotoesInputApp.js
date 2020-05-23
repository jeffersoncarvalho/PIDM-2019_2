import React, {Component} from 'react';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';

export default class BotoesInputApp extends Component{

    constructor(props){
        super(props);
        this.state = {texto:''};
    }

    acaoClique(){
        console.log(this.state.texto);
    }

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.headerText}>
                    Entrada de Texto com Botão
                </Text>
                <TextInput
                    style = {estilos.textInput}
                    onChangeText = {(texto)=>this.setState({texto})}
                    placeholder = 'Digite o seu texto!'
                />
                <View style={estilos.viewButton}>
                    <Button
                        title = 'PEGAR TEXTO!'
                    />
                </View>
            </View>
        )
    }

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
    },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
});

