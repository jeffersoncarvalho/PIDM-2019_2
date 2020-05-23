import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, MeuLabelText,Header } from '../commons';


export default class Questao05 extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        if (this.state.isLoading) {
            return (
                <CartaoItem>
                    <MeuSpinner/>
                </CartaoItem>
            )
        }

        return (
            <Cartao>
                <Header titulo="Funcionários"/>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20}}
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                    <Cartao>
                        <CartaoItem>
                            <MeuLabelText label="E-mail" conteudo={item.email}/>
                            
                        </CartaoItem>
                        <CartaoItem>
                            <MeuLabelText label="Nome" conteudo={item.username}/>
                            
                        </CartaoItem>
                        <CartaoItem>
                            <MeuLabelText label="Rua" conteudo={item.address.street}/>
                            
                        </CartaoItem>
                        <CartaoItem>
                            <MeuLabelText label="Empresa" conteudo={item.company.name}/>
                        </CartaoItem>
                     </Cartao>
                    }
                    keyExtractor={( item ) => item.id+""}
                />
                 
            </Cartao>
        );
    }
}
