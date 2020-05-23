import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.disciplina}</Text>
            </View>
        );
    }
}