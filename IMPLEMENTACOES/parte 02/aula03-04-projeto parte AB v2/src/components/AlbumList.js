import React, { Component } from 'react'
import { FlatList , ScrollView} from 'react-native'

import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = {albuns:[]}
    }

    componentDidMount(){
        return fetch('http://rallycoding.herokuapp.com/api/music_albums')
                .then(response=>response.json())
                .then(albuns=>this.setState({albuns}));    
    }

    render() {
        return (
                <FlatList
                    data = {this.state.albuns}
                    renderItem = {({item})=><AlbumDetail album={item}/> } 
                    keyExtractor = {(index,item)=>index+item}
                />
        );
    }
}