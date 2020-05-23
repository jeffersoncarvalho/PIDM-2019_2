import React, { Component } from 'react';

import { Cartao, CartaoItem, MeuBotao, Header } from './commons';

export default class ProdutoMenuScreen extends Component {

    render() {
        return (
            <Cartao>

                <Header titulo="Sistema de Alunos" />
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao02")}
                   >
                       Listar Alunos
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao01")}
                   >
                       Adicionar Aluno
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao05")}
                   >
                       Listar Users (Questão 05)
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao03")}
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