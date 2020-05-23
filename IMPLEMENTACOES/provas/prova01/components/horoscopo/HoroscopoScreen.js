import React, {Component} from 'react';
import {View,Text,TextInput,Button} from 'react-native';

import estilos from '../../estilos/Estilos'

export default class HoroscopoScreen extends Component{

    constructor(props){
        super(props);
        this.state={dia:null,mes:null,ano:null};
    }
    
    static navigationOptions = {
        title: "Horóscopo"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.tituloMenor}>
                    Horóscopo
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="dia"
                    onChangeText={(dia) => this.setState({ dia })}
                    keyboardType={"numeric"}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="mês"
                    onChangeText={(mes) => this.setState({ mes })}
                    keyboardType={"numeric"}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="ano"
                    onChangeText={(ano) => this.setState({ ano })}
                    keyboardType={"numeric"}
                />
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("ResultadoHoroscopoScreenModal",
                            {
                                dia: this.state.dia,
                                mes: this.state.mes,
                                ano: this.state.ano,
                            })}
                    />
                </View>
            </View>
        );
    }
}