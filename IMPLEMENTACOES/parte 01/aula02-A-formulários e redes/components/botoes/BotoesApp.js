import React, {Component} from 'react';
import {StyleSheet,View,Button} from 'react-native';

export default class BotoesApp extends Component{

    acaoBotao(){
        console.log("APERTOU!");
    }

    render(){
        return (
            <View style={styles.estilo1}>
                <View style={styles.estilo2}>
                    <Button
                        title='Botão 1'
                        onPress={this.acaoBotao}
                    />
                </View>
                <View style={styles.estilo2}>
                    <Button 
                        title='Botão 2'
                        color='#841584'
                    />
                </View>
                <View style={styles.estilo3}>
                    <Button
                        title='Botão 3'
                    />
                    <Button
                        title='Botão 4'
                        color='#841584'
                    />
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    estilo1:{
        flex: 1,
        justifyContent: 'center'
    },
    estilo2:{
        margin: 15
    },
    estilo3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    }
})