import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Heroi extends Component{
    render(){
        return (
            <Text>
                {this.props.nome}
            </Text>
        );
    }
}