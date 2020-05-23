import React, {Component} from 'react';
import {View,Text,Button,ScrollView,Image} from 'react-native';

import estilos from '../../estilos/Estilos'

export default class AlbumScreen extends Component{

    static navigationOptions = {
        title: "Álbum"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Álbum
                </Text>
                <ScrollView>
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                    <Image source={{uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png", width: 225, height: 300}} />
                </ScrollView>
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