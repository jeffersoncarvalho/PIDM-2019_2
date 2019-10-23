import React, {Component} from 'react';
import firebase from 'firebase';
import {Card,CardItem,MyButton} from './commons'

export default class Logout extends Component{

    static navigationOptions = {
        title: 'Logout',
    };

    render(){
        return(
            <Card>
                <CardItem>
                    <MyButton action={()=>firebase.auth().signOut()}>Log Out</MyButton>
                </CardItem>
            </Card>
        );
    }
}