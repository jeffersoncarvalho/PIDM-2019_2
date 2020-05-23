import React, {Component} from 'react';
import {View,Text,Button,Image} from 'react-native';

import estilos from '../../estilos/Estilos'

export default class PerfilScreen extends Component{

    static navigationOptions = {
        title: "Perfil"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Perfil
                </Text>
                <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                
                <View>
                    <Text style={estilos.tituloMenor}>Nome: {this.props.navigation.getParam("nome","Fulano")}</Text>
                    <Text style={estilos.tituloMenor}>Idade: {this.props.navigation.getParam("idade","Fulano")}</Text>
                    <Text style={estilos.tituloMenor}>E-mail: {this.props.navigation.getParam("email","Fulano")}</Text>
                    <Text style={estilos.tituloMenor}>E-mail: {this.props.navigation.getParam("curso","Fulano")}</Text>
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