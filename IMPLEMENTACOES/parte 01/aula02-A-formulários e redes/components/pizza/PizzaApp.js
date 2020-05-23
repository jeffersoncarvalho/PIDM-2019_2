import React, {Component} from 'react';
import {View,Text,TextInput} from 'react-native';

export default class PizzaApp extends Component{

    constructor(props){
        super(props);
        this.state = {texto:''};
    }

    render(){
        return (
            <View>
                <TextInput
                    placeholder = 'Digite o texto aqui.'
                    onChangeText = {(texto)=>this.setState({texto})}
                    value = {this.state.texto}
                 />
                <Text>
                    { 
                        this.state.texto
                        .split(' ')
                        .map((cadeia)=>{return cadeia && '🍕'})
                        .join(' ') }
                </Text>
            </View>
        )
    }
}

