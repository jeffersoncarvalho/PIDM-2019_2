import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

import estilos from '../../estilos/Estilos'

export default class ResultadoHoroscopoScreen extends Component{

    static navigationOptions = {
        title: "Resultado Horóscopo"
    };

    render(){
        const dia = this.props.navigation.getParam("dia","2");
        const mes = this.props.navigation.getParam("mes","2");
        const ano = this.props.navigation.getParam("ano","82");
        let msg = "nada"; 
        if(dia%2==0){
            if(mes%2==0){
                if(ano%2==0){
                    msg = "Resultado 1";
                }else{
                    msg = "Resultado 2";   
                }
            }else{
                if(ano%2==0){
                    msg = "Resultado 3";
                }else{
                    msg = "Resultado 4";
                }
            }
        }else{
            if(mes%2==0){
                if(ano%2==0){
                    msg = "Resultado 5";
                }else{
                    msg = "Resultado 6";
                }
            }else{
                if(ano%2==0){
                    msg = "Resultado 7";
                }else{
                    msg = "Resultado 8";
                }
            }
        }
        return (
            <View style={estilos.container}>
                <Text style={estilos.tituloMenor}>
                    Resultado Horóscopo:
                    {msg}
                </Text>
                <View style={estilos.button}>
                    <Button
                        title="Sair"
                        onPress={()=>this.props.navigation.goBack()}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="Menu"
                        onPress={()=>this.props.navigation.navigate("MenuScreen")}
                    />
                </View>
            </View>
        );
    }
}