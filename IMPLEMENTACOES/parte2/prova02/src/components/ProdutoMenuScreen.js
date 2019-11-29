import React, { Component } from 'react';

import { Cartao, CartaoItem, MeuBotao, Header } from './commons';

export default class ProdutoMenuScreen extends Component {

    render() {
        return (
            <Cartao>

                <Header titulo="Sistema de Computadores" />
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao01")}
                   >
                       Questão 01
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao02")}
                   >
                       Questão 02
                    </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao03")}
                   >
                       Questão 03
                   </MeuBotao> 
                </CartaoItem>
                <CartaoItem>
                   <MeuBotao
                        onPress={()=>this.props.navigation.navigate("Questao05")}
                   >
                       Questão 05
                   </MeuBotao> 
                </CartaoItem>
            </Cartao>
        )
    }
}