import React,{Component} from 'react';
import {Text,View} from 'react-native';

import IMCMsg from './IMCMsg';

export default class IMCCalc extends Component{
    render(){
        if(this.props.altura==null || 
           this.props.peso==null ||
           !this.props.calcular) return null;
        let imc = this.props.peso/(this.props.altura*this.props.altura);
        return (
            <View>
                <Text style={{fontWeight:"bold",fontSize:16}}>
                    O seu IMC é : {imc}
                </Text>
                <IMCMsg imc={imc}/>
            </View>
        )
    }
}