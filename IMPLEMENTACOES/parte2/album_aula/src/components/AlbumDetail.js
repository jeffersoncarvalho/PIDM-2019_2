import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking} from 'react-native';
import Cartao from './Cartao';
import CartaoItem from './CartaoItem';
import MeuBotao from './MeuBotao';

export default class AlbumDetail extends Component {
  render() {
    return (
      <Cartao>

        <CartaoItem style={estilos.estiloCabecalho}>
          <View style={estilos.cabecalhoThumbEstilo}>
            <Image
              source={{ uri: this.props.album.thumbnail_image }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={estilos.textoCabecalhoEstilo}>
            <Text>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CartaoItem>

        <CartaoItem>
          <Image
            source={{ uri: this.props.album.image }}
            style={{ width: 400, height: 300 }}
          />
        </CartaoItem>

        <CartaoItem>
          <MeuBotao
            onPress={()=>Linking.openURL(this.props.album.url)}
          >
            Me Compre
          </MeuBotao>
          
        </CartaoItem>

      </Cartao>
    )
  }
}

const estilos = StyleSheet.create({
  estiloCabecalho: {
    flexDirection: "row",
    justifyContent: "flex-start"
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