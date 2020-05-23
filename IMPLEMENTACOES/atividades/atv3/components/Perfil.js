import React, {Component} from 'react';
import {View,Text,Image,Button} from 'react-native';

import estilos from '../estilos/Estilos'

export default class Perfil extends Component{
    
    static navigationOptions = {
        title: "Perfil"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Perfil
                </Text>
                <Image
                    source={require('./aragao225x300.png')}
                    style={{ width: 225, height: 300 }}
                />
                <View>
                    <Text style={estilos.tituloMenor}>Nome: {this.props.navigation.getParam("nome","Fulano")}</Text>
                    <Text style={estilos.tituloMenor}>Idade: {this.props.navigation.getParam("idade","Fulano")}</Text>
                    <Text style={estilos.tituloMenor}>E-mail: {this.props.navigation.getParam("email","Fulano")}</Text>
                </View>
                <View style={estilos.button}>
                    <Button
                        title="Home"
                        onPress={()=>this.props.navigation.navigate("Home")}
                    />
                </View>
            </View>
        );
    }
}