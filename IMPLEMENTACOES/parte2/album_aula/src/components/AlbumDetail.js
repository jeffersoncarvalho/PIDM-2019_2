import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class AlbumDetail extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.album.title}</Text>
        <Text>{this.props.album.artist}</Text>
        <Text>{this.props.album.url}</Text>
      </View>
    )
  }
}