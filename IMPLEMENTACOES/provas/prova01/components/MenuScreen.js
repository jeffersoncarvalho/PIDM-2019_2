import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

import estilos from '../estilos/Estilos';

export default class MenuScreen extends Component{

    static navigationOptions = {
        title: "Menu"
    };

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Menu</Text>
                <View style={estilos.button}>
                    <Button
                        title="CADASTRO"
                        onPress={()=>this.props.navigation.navigate("CadastroScreen")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="ÁLBUM"
                        onPress={()=>this.props.navigation.navigate("AlbumScreen")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="IMC"
                        onPress={()=>this.props.navigation.navigate("IMCScreen")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="HOROSCOPO"
                        onPress={()=>this.props.navigation.navigate("HoroscopoScreen")}
                    />
                </View>
            </View>
            
        )
    }

}