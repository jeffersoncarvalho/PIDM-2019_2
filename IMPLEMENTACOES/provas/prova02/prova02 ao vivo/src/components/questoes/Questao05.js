import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Questao05 extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/> 
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.email} </Text>}
          keyExtractor={(item) => item.id+""}
        />
      </View>
    );
}
}