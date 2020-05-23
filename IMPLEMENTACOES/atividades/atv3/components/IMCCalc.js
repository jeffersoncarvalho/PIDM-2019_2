import React,{Component} from 'react';
import {Text,View} from 'react-native';

import IMCMsg from './IMCMsg';
import estilos from '../estilos/Estilos';

export default class IMCCalc extends Component{
    render(){
        if(this.props.altura==null || 
           this.props.peso==null) return null;
        let imc = this.props.peso/(this.props.altura*this.props.altura);
        return (
            <View>
                <Text style={{fontWeight:"bold",fontSize:20}}>
                    O seu IMC é : {imc}
                </Text>
                <IMCMsg imc={imc}/>
            </View>
        )
    }
}