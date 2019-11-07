import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, MeuLabelText, Header, MeuBotao } from './commons'

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LivroListarScreen extends Component {

    static navigationOptions = {
        title: "Listar Livros"
    };

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('livros');
        this.state = { loading: true, livros: [] };
        this._isMounted = false;
    }

    alimentarLivros(query) {
        let livros = [];
        query.forEach((doc) => {
            //const { titulo, preco, autor, imagem } = doc.data();
            livros.push({
                key: doc.id,
                titulo:doc.data().titulo,
                autor:doc.data().autor,
                preco:doc.data().preco,
                imagem:doc.data().imagem
            });
        });//forEach 
        this._isMounted && this.setState({ loading: false, livros });
    }

    excluirLivro(key){
        this._isMounted && this.setState({loading:true});
        firebase.firestore().collection('livros').doc(key).delete()
        .then(()=>{
            this._isMounted && this.setState({loading:false});
        })
        .catch(()=>{
            this._isMounted && this.setState({loading:false});
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.unscribe = this.ref.onSnapshot(this.alimentarLivros.bind(this));//onSnapshot
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    renderAlert(key) {
        Alert.alert(
            'Excluir livro',
            'Tem certeza?',
            [
                { text: 'Sim', onPress: () => this.excluirLivro(key) },
                { text: 'Cancelar', onPress: () => console.log('Cancelar Pressed') },
            ],
            { cancelable: false },
        );
    }

    renderConteudo() {
        if (this.state.loading) {
            return <Cartao><CartaoItem><MeuSpinner /></CartaoItem></Cartao>
        }
        return <FlatList
            data={this.state.livros}
            renderItem={({ item }) =>
                <Cartao>
                    
                    <CartaoItem>
                        <MeuLabelText label="Título" texto={item.titulo} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Autor" texto={item.autor} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Preço" texto={item.preco} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuBotao
                            onPress={() => this.props.navigation.navigate("LivroEditarScreen", { livro: item })}
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
    }

    render() {
        return (
            <Cartao>
                <Cartao><Header titulo="Sistema de Livros" /></Cartao>
                {this.renderConteudo()}
            </Cartao>
        );
    }
}