import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Cartao, CartaoItem, MeuBotao, Header } from './commons';

export default class ProdutoMenuScreen extends Component {

    render() {
        return (
            <Cartao>

                <Header titulo="Sistema de Produtos" />
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("ProdutoListarScreen")}
                   >
                       Listar Produtos
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("ProdutoAddScreen")}
                   >
                       Adicionar Produto
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("ProdutoRecuperarScreen")}
                   >
                       Recuperar Produto
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("UploadImagemScreen")}
                   >
                       Upload Imagem
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("ListarImagensScreen")}
                   >
                       Listar Imagens
                   </MeuBotao> 
                </CartaoItem>
            </Cartao>
        )
    }
}