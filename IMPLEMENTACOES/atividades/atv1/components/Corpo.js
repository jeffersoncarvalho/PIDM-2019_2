import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Corpo extends Component{
    render(){
        let pic = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-113x150.png'};
        return (
            <Image source={pic} style={{width:113,height:150}}/>
        );
    }
}
