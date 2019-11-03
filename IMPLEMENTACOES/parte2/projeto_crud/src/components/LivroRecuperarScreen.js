import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

import { Cartao, CartaoItem, MeuBotao, Header, MeuSpinner } from './commons'

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LivroRecuperarScreen extends Component {

    static navigationOptions = {
        title: "Recuperar Livro"
    };

    constructor(props){
        super(props);
        this.state = {loading:true,livros_id:[],loading_pressed:false, key_pressed:"null"};
    }

    componentDidMount(){
        firebase.firestore().collection('livros').onSnapshot(
            (query)=>{
                livros_id = [];
                query.forEach((doc)=>{
                    livros_id.push({
                        key:doc.id
                    })
                });
                this.setState({livros_id,loading:false})
            }
        );
    }

    recuperarLivro(key){
        this.setState({loading_pressed:true});
        firebase.firestore().collection('livros').doc(key)
        .get()
        .then((doc)=>{
            if(doc.exists){
                alert("Titulo: \t"+doc.data().titulo+
                      "\nAutor: \t"+doc.data().autor);
            }
            this.setState({loading_pressed:false});
        })
        .catch(()=>{
            this.setState({loading_pressed:false});
        })
    }

    renderBotao(key){
        if(key==this.state.key_pressed){
            if(this.state.loading_pressed){
                return <CartaoItem><MeuSpinner/></CartaoItem>
            }
        }
        return (
            <MeuBotao
                onPress={()=>{
                    this.setState({key_pressed:key})
                    this.recuperarLivro(key);
                }}
            >
                Recuperar Livro
            </MeuBotao>
        );
    }

    renderConteudo(){
        if(this.state.loading){
            return <CartaoItem><MeuSpinner/></CartaoItem>
        }
        return(
            <FlatList 
                data={this.state.livros_id}
                renderItem={({item})=>
                <Cartao>
                <CartaoItem>
                    <Text>{item.key}</Text>
                </CartaoItem>
                <CartaoItem>
                    {this.renderBotao(item.key)}
                </CartaoItem>
                </Cartao>
                }
                
            />
        );
    }

    render(){
        return(
            <Cartao>
                <Header titulo="Recuperar Livro"/>
                {this.renderConteudo()}
            </Cartao>
        );
    }
}