import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

import Calculadora from './Calculadora';

export default class CalculadoraApp extends Component{

    constructor(props){
        super(props);
        this.state = {peso:null,altura:null};
    }

    render(){
        return(
            <View>
                <TextInput
                    placeholder = 'Digite a altura'
                    onChangeText = {(altura)=>this.setState({altura})} 
                />
                <TextInput
                    placeholder = 'Digite o peso'
                    onChangeText = {
                        (p)=>{
                            this.setState(
                                {peso:p}
                            )
                        }
                    } 
                 />
                <Calculadora altura = {this.state.altura}
                             peso = {this.state.peso} />
            </View>
        )
    }
}










