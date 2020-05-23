import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

import estilos from '../estilos/Estilos';

export default class Home extends Component{

    static navigationOptions = {
        title: "Home"
    };

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.titulo}>ATV 0.3</Text>
                <View style={estilos.button}>
                    <Button
                        title="Cadastro"
                        onPress={()=>this.props.navigation.navigate("Cadastro")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="IMC"
                        onPress={()=>this.props.navigation.navigate("IMC")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="Sobre"
                        onPress={()=>this.props.navigation.navigate("Sobre")}
                    />
                </View>
            </View>
            
        )
    }

}
