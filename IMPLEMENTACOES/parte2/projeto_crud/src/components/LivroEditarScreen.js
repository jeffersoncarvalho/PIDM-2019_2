import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, MeuInput, Header, MeuBotao } from './commons'

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LivroEditarScreen extends Component {

    static navigationOptions = {
        title: "Editar Livro"
    };

    constructor(props) {
        super(props);
        const livro = this.props.navigation.getParam("livro", null);
        this.state = { loading: false, titulo: livro.titulo, autor: livro.autor, preco: livro.preco, key:livro.key }
    }

    updateLivro(){
        this.setState({loading:true});
        firebase.firestore().collection('livros').doc(this.state.key)
        .set({
            titulo: this.state.titulo,
            autor: this.state.autor, 
            preco: this.state.preco
        })
        .then(()=>{
            this.setState({loading:false});
        })
        .catch(()=>{
            this.setState({loading:false});
        });
    }

    renderBotao(){
        if(this.state.loading){
            return <MeuSpinner/>
        }
        return <MeuBotao onPress={()=>this.updateLivro()}>Atualizar</MeuBotao>
    }

    render() {
        
        return (
            <View>
                <Cartao>
                    <Header titulo="Sistema de Livros" />
                    <CartaoItem>
                        <MeuInput label="Título" value={this.state.titulo} onChangeText={(titulo) => this.setState({ titulo })} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuInput label="Autor" value={this.state.autor} onChangeText={(autor) => this.setState({ autor })} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuInput label="Preço" value={this.state.preco + ""} onChangeText={(preco) => this.setState({ preco })} />
                    </CartaoItem>
                    <CartaoItem>
                        {this.renderBotao()}
                    </CartaoItem>
                </Cartao>
            </View>
        );
    }
}