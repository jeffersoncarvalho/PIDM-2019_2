import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Header, Cartao, CartaoItem, MeuBotao, MeuSpinner } from './commons'

import * as firebase from 'firebase';
import 'firebase/firestore';


export default class ProdutoRecuperarScreen extends Component {

    static navigationOptions = {
        title: "Recuperar Produto"
    }

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('produtos');
        this.state = { loading: true, produtos_id: [], loadingItem: false, clicado:null };
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.alimentarProdutos_id.bind(this));//onSnapshot
    }

    alimentarProdutos_id(query) {
        let produtos_id = [];
        query.forEach((doc) => {
            //const { titulo, preco, autor, imagem } = doc.data();
            produtos_id.push({
                key: doc.id,
            });
        });//forEach 
        this.setState({ loading: false, produtos_id });
    }

    recuperarProduto(key) {
        this.setState({ loadingItem: true })
        firebase.firestore().collection('produtos').doc(key)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    alert("Nome: " + doc.data().nome +
                        "\nCategoria: " + doc.data().categoria +
                        "\nPreço: " + doc.data().preco)
                }
                this.setState({ loadingItem: false, clicado:null })
            })
            .catch((error) => {
                this.setState({ loadingItem: false, clicado:null })
                console.log(error);
            })

    }

    renderBotao(key) {
        if(this.state.clicado!=null && this.state.clicado==key){
            if (this.state.loadingItem)
                return <MeuSpinner />
        }
        
        return <MeuBotao
                onPress={() => {
                    this.recuperarProduto(key);
                    this.setState({clicado:key})
                }}
               >
                    Recuperar
              </MeuBotao>
    }

    renderConteudo() {
        if (this.state.loading)
            return <CartaoItem><MeuSpinner /></CartaoItem>

        return <FlatList
            data={this.state.produtos_id}
            renderItem={({ item }) =>
                <Cartao>
                    <CartaoItem>
                        <Text>{item.key}</Text>
                    </CartaoItem>
                    <CartaoItem>
                        {this.renderBotao(item.key)}
                    </CartaoItem>
                </Cartao>}
        />
    }

    render() {
        return (
            <View>
                <Cartao>
                    <Header titulo="Sistema de Produtos" />
                </Cartao>
                {this.renderConteudo()}
            </View>
        )
    }
}