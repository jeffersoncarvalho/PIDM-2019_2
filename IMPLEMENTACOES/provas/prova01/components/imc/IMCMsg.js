import React,{Component} from 'react';
import {Text} from 'react-native';

export default class IMCMsg extends Component{
    render(){
        if (this.props.imc<17) return (<Text style={{fontWeight:"bold",fontSize:20,color:"red"}}>Muito abaixo do peso!</Text>);
        if (this.props.imc<18.49) return (<Text style={{fontWeight:"bold",fontSize:20,color:"red"}}>Abaixo do peso!</Text>);
        if (this.props.imc<24.99) return (<Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>Peso normal.</Text>);
        if (this.props.imc<29.99) return (<Text style={{fontWeight:"bold",fontSize:20,color:"red"}}>Acima do peso!</Text>);
        return (<Text style={{fontWeight:"bold",fontSize:20,color:"red"}}>Obesidade!</Text>);
    }
}