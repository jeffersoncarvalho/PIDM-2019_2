import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Header extends Component{
  render(){
    return(
      <View style={estilos.estiloView}>
        <Text style={estilos.estiloTexto}>{this.props.titulo}</Text>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
    estiloView:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        backgroundColor:'#F2F2F2',
        height:60,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2
    },
    estiloTexto:{
        fontSize:20
    }
})