import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import MyButton from './MyButton';
import Card from './Card';
import CardItem from './CardItem'

export default class AlbumDetail extends Component {
    render() {
        return (
            <Card>

                <CardItem style={estilos.cabecalhoEstilo}>
                    <View style={estilos.cabecalhoThumbEstilo}>
                        <Image
                            source={{uri:this.props.album.thumbnail_image}}
                            style={{height:50,width:50}}
                        />
                    </View>
                    <View style={estilos.textoCabecalhoEstilo}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardItem>
                
                <CardItem>
                    <Image
                        source={{uri:this.props.album.image}}
                        style={{height:300,width:389}}
                    />
                </CardItem>
                
                <CardItem>
                    <MyButton
                        name="OK"
                        action={()=>Linking.openURL(this.props.album.url)} 
                    >
                        Buy Now!!    
                    </MyButton>
                </CardItem>
                
            </Card>
        );
    }
}

const estilos = StyleSheet.create({
  cabecalhoEstilo:{
      flexDirection:"row",
      justifyContent:"flex-start"
  },
  textoCabecalhoEstilo:{
    flexDirection:"column",
    justifyContent:"space-around"
  },
  cabecalhoThumbEstilo:{
      marginLeft:10,
      marginRight:10
  }  
})