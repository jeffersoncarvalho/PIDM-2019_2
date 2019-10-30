import React, {Component} from 'react';
import {View,Text} from 'react-native';

import {Cartao,CartaoItem,MeuSpinner,MeuInput, MeuBotao} from './commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LivroAddScreen extends Component{

    static navigationOptions = {
        title: "Adicionar Livro"
    };

    constructor(props){
        super(props);
        this.state = {loading:false,titulo:"",autor:"",preco:0}
    }

    adicionarLivro(){
        this.setState({loading:true});
        firebase.firestore().collection('livros').add(
            {
             autor:this.state.autor,
             titulo:this.state.titulo,
             preco:this.state.preco,
             imagem:"imagem.png"
            }
        )
        .then(()=>{
            this.setState({loading:false})
            this.props.navigation.navigate("LivroListarScreen");
        })
        .catch(()=>{
            this.setState({loading:false})
        })
    }

    renderBotao(){
        if(this.state.loading){
            return <MeuSpinner/>
        }
        return <MeuBotao onPress={()=>this.adicionarLivro()}>Adicionar</MeuBotao>
    }

    render() {
        
        return (
            <View>
                <Cartao>
                    <CartaoItem>
                        <MeuInput label="Título" placeholder="As Tranças do Rei Careca " onChangeText={(titulo) => this.setState({ titulo })} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuInput label="Autor" placeholder="Fulano de Tal" onChangeText={(autor) => this.setState({ autor })} />
                    </CartaoItem>
                    <CartaoItem>
                        <MeuInput label="Preço" placeholder="0.00" onChangeText={(preco) => this.setState({ preco })} />
                    </CartaoItem>
                    <CartaoItem>
                        {this.renderBotao()}
                    </CartaoItem>
                </Cartao>
            </View>
        );
    }
}