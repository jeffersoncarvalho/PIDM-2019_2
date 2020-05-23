import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

import estilos from '../estilos/Estilos';
import IMCCalc from './IMCCalc';

export default class Resultado extends Component{
    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Resultado
                </Text>
                <IMCCalc
                    altura={this.props.navigation.getParam("altura","0")}
                    peso={this.props.navigation.getParam("peso","0")}
                />
                <View style={estilos.button}>
                    <Button
                        title="Sair"
                        onPress={()=>this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
}