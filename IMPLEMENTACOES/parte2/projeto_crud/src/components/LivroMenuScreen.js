import React,{Component} from 'react';
import {Text} from 'react-native';

import {Cartao,CartaoItem,MeuBotao} from './commons'

export default class LivroMenuScreen extends Component{

    static navigationOptions = {
        title: "Menu"
    };

    render(){
        return (
            <Cartao>
                
                <CartaoItem>
                    <MeuBotao onPress={()=>this.props.navigation.navigate('LivroListarScreen')}>
                        Listar Livros
                    </MeuBotao>
                </CartaoItem>
                <CartaoItem>
                    <MeuBotao onPress={()=>this.props.navigation.navigate('LivroDetalheScreen')} >
                        Ver Detalhes
                    </MeuBotao>
                </CartaoItem>
                <CartaoItem>
                    <MeuBotao onPress={()=>this.props.navigation.navigate('LivroAddScreen')}>
                        Adicionar Livro
                    </MeuBotao>
                </CartaoItem>
                <CartaoItem>
                    <MeuBotao onPress={()=>this.props.navigation.navigate('LivroEditarScreen')}>
                        Editar Livro
                    </MeuBotao>
                </CartaoItem>
            </Cartao>
        );
    }
}