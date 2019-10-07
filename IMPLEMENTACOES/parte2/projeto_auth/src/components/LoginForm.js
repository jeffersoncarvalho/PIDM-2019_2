import React, {Component} from 'react';
import {Card,CardItem,MyButton} from './commons'

export default class LoginForm extends Component{
    render(){
        return(
           <Card>
               <CardItem/>
               <CardItem/>
               <CardItem>
                   <MyButton>
                       Log in
                   </MyButton>
               </CardItem>
           </Card>
        );
    }
}