import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, Header, MeuBotao, MeuLabelText } from './commons'

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class ProdutoListarScreen extends Component {


    static navigationOptions = {
        title: "Listar Produtos"
    }

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('produtos');
        this.state = { loading: true, produtos: [] };
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.alimentarProdutos.bind(this));//onSnapshot
    }

    alimentarProdutos(query) {
        let produtos = [];
        query.forEach((doc) => {
            //const { titulo, preco, autor, imagem } = doc.data();
            produtos.push({
                key: doc.id,
                nome:doc.data().nome,
                categoria:doc.data().categoria,
                preco:doc.data().preco
            });
        });//forEach 
        this.setState({ loading: false, produtos });
    }

    renderAlert(key) {
        Alert.alert(
            'Excluir produto',
            'Tem certeza?',
            [
                { text: 'Sim', onPress: () => this.excluirProduto(key) },
                { text: 'Cancelar', onPress: () => console.log('Cancelar Pressed') },
            ],
            { cancelable: false },
        );
    }

    excluirProduto(key){
        this.setState({loading:true});
        firebase.firestore().collection('produtos').doc(key).delete()
        .then(()=>{
            this.setState({loading:false});
        })
        .catch(()=>{
            this.setState({loading:false});
        });
    }

    renderConteudo(){
        if(this.state.loading){
            return <CartaoItem><MeuSpinner/></CartaoItem>
        }
        return ( 
        <FlatList
            data={this.state.produtos}
            renderItem={({item})=>
                <Cartao>
                    <CartaoItem>
                        <MeuLabelText label="Nome" conteudo={item.nome}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Categoria" conteudo={item.categoria}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Preço" conteudo={item.preco}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuBotao
                            onPress={()=>this.props.navigation.navigate("ProdutoEditarScreen",{produto:item})}
                        >
                            Editar
                        </MeuBotao>

                        <MeuBotao
                            onPress={()=>this.renderAlert(item.key)}
                        >
                            Excluir
                        </MeuBotao>
                    </CartaoItem>
                </Cartao>
            }
            
        />
        )
    }

    render() {
        return (
            <Cartao>
                <Header titulo="Sistema de Produtos" />
                {this.renderConteudo()}
            </Cartao>
        )
    }
}