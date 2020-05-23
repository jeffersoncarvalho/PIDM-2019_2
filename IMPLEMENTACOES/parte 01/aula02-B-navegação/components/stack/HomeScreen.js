import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home ;D</Text>
                <Button
                    title="Ir para About"
                    onPress={() => this.props.navigation.navigate('About',{nome: "Jefferson"})}
                />
                <View style={{ padding: 15 }}></View>
                <Button
                    title="Modal"
                    onPress={() => this.props.navigation.navigate('Modal')}
                />
            </View>
        )
    }
}