import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, Header, MeuBotao, MeuLabelText } from '../commons';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao02 extends Component {


    static navigationOptions = {
        title: "Listar Computadores"
    }

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('computadores');
        this.state = { loading: true, computadores: [] };
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.alimentarComputadores.bind(this));//onSnapshot
    }

    alimentarComputadores(query) {
        let computadores = [];
        query.forEach((doc) => {
            
            computadores.push({
                key: doc.id,
                processador:doc.data().processador,
                memoria:doc.data().memoria,
                clock:doc.data().clock,
                cache:doc.data().cache
            });
        });//forEach 
        this.setState({ loading: false, computadores });
    }

    calcular(computador){
        let velocidade = (computador.memoria * computador.clock)/computador.cache;
        alert("Velocidade: "+velocidade);
    }

    renderConteudo(){
        if(this.state.loading){
            return <CartaoItem><MeuSpinner/></CartaoItem>
        }
        return (
        
        <FlatList
            contentContainerStyle={{ paddingBottom: 10}}
            data={this.state.computadores}
            renderItem={({item})=>
                <Cartao>
                    <CartaoItem>
                        <MeuLabelText label="Processador" conteudo={item.processador}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Memória" conteudo={item.memoria}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Clock" conteudo={item.clock}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Cache" conteudo={item.cache}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuBotao
                            onPress={()=>this.props.navigation.navigate("Questao04",{computador:item})}
                        >
                            Editar
                        </MeuBotao>

                        <MeuBotao
                            onPress={()=>this.calcular(item)}
                        >
                            Calcular
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
                <Header titulo="Sistema de Computadores" />
                {this.renderConteudo()}
            </Cartao>
        )
    }
}