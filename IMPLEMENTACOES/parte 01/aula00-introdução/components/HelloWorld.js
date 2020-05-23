import React, {Component} from 'react';
import {Text} from 'react-native';

export default class HelloWorld extends Component{
    render(){
        return (
            <Text>{this.props.mensagem}</Text>
        );
    }
}