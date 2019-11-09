import React,{Component} from 'react';
import {View,Text,FlatList,Image,StyleSheet} from 'react-native';

import * as firebase from 'firebase';

import {Cartao,CartaoItem,MeuSpinner,Header, ProgressiveImage} from './commons'


export default class ListarImagensScreen extends Component{

    constructor(props){
        super(props);
        this.imagens = firebase.database().ref("/imagens_aula/");
        this.state = {loading:true,urls:[]}
    }

    getImagensURL(imagens){
        let urls = [];
        imagens.once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                urls.push({url:childData.url});
                //alert("key: "+ key + "\ndata: "+childData.url);
            });
        })
        .then(()=>{this.setState({urls,loading:false})})
        .catch((error)=>{this.setState({loading:false})});
    }

    componentDidMount(){
        this.getImagensURL(this.imagens);
    }

    renderConteudo(){
        if(this.state.loading)
            return <CartaoItem><MeuSpinner/></CartaoItem>
        
        return <FlatList
            data = {this.state.urls}
            renderItem = {({item})=>
                <CartaoItem>
                    <Image source={{uri:item.url}} style={styles.image}/>
                    <ProgressiveImage source={{uri:item.url}} style={styles.image}/>
                </CartaoItem>
            }
            keyExtractor={(item)=>item.url}
        />
    }

    render(){
        return(
            <Cartao>
                <Header titulo="Sistema de Produtos"/>
                {this.renderConteudo()}
            </Cartao>
        )
    }
}

const styles = StyleSheet.create({
    image: {
      minWidth: 200,
      height: 200
    }
  });