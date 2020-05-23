import React, { Component } from 'react';
import {FlatList } from 'react-native';

import { MeuSpinner, Cartao, CartaoItem, Header, MeuBotao, MeuLabelText } from '../commons'

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Questao02 extends Component {


    static navigationOptions = {
        title: "Listar Alunos"
    }

    constructor(props) {
        super(props);
        this.unscribe = null;
        this.ref = firebase.firestore().collection('alunos');
        this.state = { loading: true, alunos: [] };
    }

    componentDidMount() {
        this.unscribe = this.ref.onSnapshot(this.alimentarAlunos.bind(this));//onSnapshot
    }

    alimentarAlunos(query) {
        let alunos = [];
        query.forEach((doc) => {
            //const { titulo, preco, autor, imagem } = doc.data();
            alunos.push({
                key: doc.id,
                nome:doc.data().nome,
                idade:doc.data().idade,
                ap1:doc.data().ap1,
                ap2:doc.data().ap2
            });
        });//forEach 
        this.setState({ loading: false, alunos });
    }

    calcular(aluno){
        let media = (Number(aluno.ap1)+Number(aluno.ap2))/2.0
        alert("MÉDIA: " + media);
    }

    renderConteudo(){
        if(this.state.loading){
            return <CartaoItem><MeuSpinner/></CartaoItem>
        }
        return ( 
        <FlatList
            data={this.state.alunos}
            renderItem={({item})=>
                <Cartao>
                    <CartaoItem>
                        <MeuLabelText label="Nome" conteudo={item.nome}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="Idade" conteudo={item.idade}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="AP1" conteudo={item.ap1}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuLabelText label="AP2" conteudo={item.ap2}/>
                    </CartaoItem>
                    <CartaoItem>
                        <MeuBotao
                            onPress={()=>this.props.navigation.navigate("Questao04",{aluno:item})}
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
                <Header titulo="Sistema de Alunos" />
                {this.renderConteudo()}
            </Cartao>
        )
    }
}