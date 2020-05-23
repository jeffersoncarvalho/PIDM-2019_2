import React, {Component} from 'react';
import {Text} from 'react-native';

export default class IMCMensagem extends Component{
    render(){
        if(this.props.imc==null) return null;
        if (this.props.imc<17) return (<Text>Muito abaixo do peso!</Text>);
        if (this.props.imc<18.49) return (<Text>Abaixo do peso!</Text>);
        if (this.props.imc<24.99) return (<Text>Peso normal.</Text>);
        if (this.props.imc<29.99) return (<Text>Acima do peso!</Text>);
        if (this.props.imc<34.99) return (<Text>Obesidade!</Text>);
    }
}