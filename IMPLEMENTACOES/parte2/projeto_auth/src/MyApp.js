import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, MySpinner, MyButton, CardItem, Card } from './components/commons';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

export default class MyApp extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

    //chave aqui
    if (!firebase.apps.length) {
      firebase.initializeApp({
        
      });
    }

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('ContentStack');
      }else{
        this.props.navigation.navigate('LoginStack');
      }
    });

  }

  render(){
    return(
      <Card><CardItem><MySpinner size="large"/></CardItem></Card>
    );
  }

}

//versão sem Routes
/*export default class MyApp extends Component {

  constructor(props){
    super(props);
    this.state = {loggedIn:null};

  }

  componentDidMount() {

    //chave aqui
    if (!firebase.apps.length) {
      ;
    }

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true});
        //alert("SUCESSO!")
      }else{
        this.setState({loggedIn:false});
        //alert("FALHOU")
      }

    })

  }

  renderConteudo(){
    switch(this.state.loggedIn){
      case true:
        return <Logout/>
      case false:
        return <LoginForm/>;
      default:
        return <Card><CardItem><MySpinner size="large"/></CardItem></Card>
    }
  }

  render() {
    return (
      <View>
        <Header title="Autenticação" />
        {this.renderConteudo()}
      </View>
    );
  }
}*/
