import React, {Component} from 'react'
import {Text, View} from 'react-native'
import NumberFormat from 'react-number-format'

import IMCMensagem from './IMCMensagem'

export default class Calculadora extends Component{
    render(){
        if (!this.props.altura || !this.props.peso)
            return null;
        const imc = this.props.peso/(this.props.altura*this.props.altura);
        return (
            <View>
                <Text>
                    O IMC é <NumberFormat 
                                value={imc} 
                                decimalScale='2' 
                                displayType='text'/>
                </Text>
                <IMCMensagem imc={imc}/>
            </View>
        )
    }
}