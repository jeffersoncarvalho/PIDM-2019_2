import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

    constructor(props){
        super(props);
        this.state = {albuns:[]}
    }

    componentDidMount(){
        return fetch("http://rallycoding.herokuapp.com/api/music_albums")
        .then((response)=>response.json())
        .then(
            (responseJson)=>{
                this.setState({albuns:responseJson});
            }
        )
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.albuns}
                    renderItem = {({item})=><AlbumDetail album={item}/>}
                    keyExtractor = {(item,index)=>index+item}
                />
            </ScrollView>
        );
    }

}