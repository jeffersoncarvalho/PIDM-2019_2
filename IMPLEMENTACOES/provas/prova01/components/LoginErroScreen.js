import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

import estilos from '../estilos/Estilos'

export default class LoginErroScreen extends Component{

    static navigationOptions = {
        title: "Erro no Login!"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Ooooops
                </Text>
                
                <View style={{padding:70}}>
                    <Text style={estilos.tituloMenor}> 
                        O login {this.props.navigation.getParam("login","Fulano")} falhou. Tente novamente. 
                    </Text>
                </View>
                <View style={estilos.button}>
                    <Button
                        title="VOLTAR"
                        onPress={()=>this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
}