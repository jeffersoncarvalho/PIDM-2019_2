import React, {Component} from 'react';
import {View,Text,Image,Button} from 'react-native';

import estilos from '../estilos/Estilos'

export default class Sobre extends Component{

    static navigationOptions = {
        title: "Sobre"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Sobre
                </Text>
                <Image
                    source={require('./vilnei225x300.png')}
                    style={{ width: 225, height: 300 }}
                />
                <View>
                    <Text style={estilos.tituloMenor}>Nome: João Vilnei</Text>
                    <Text style={estilos.tituloMenor}>Idade: 22</Text>
                    <Text style={estilos.tituloMenor}>E-mail: vilneiumcaralegal@dd.br</Text>
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