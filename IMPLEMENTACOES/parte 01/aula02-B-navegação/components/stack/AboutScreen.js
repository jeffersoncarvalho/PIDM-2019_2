import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Logo from './Logo';

export default class AboutScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { contador: 0 };
    }

    aumentarContador = () => {
        this.setState({ contador: this.state.contador + 1 });
    }

    componentDidMount() {
        this.props.navigation.setParams({ aumentarContador: this.aumentarContador })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Logo titulo='About' />,
            headerRight: (
                <Button
                    onPress={navigation.getParam('aumentarContador')}
                    title="Info"
                    color="#000"
                />
            )
        }
    };

    /*static navigationOptions = {
        //title: 'About'
        headerTitle: <Logo titulo='About' />,
        headerRight: (
            <Button
                onPress={navigation.getParam('aumentarContador')}
                title="Info"
                color="#000"
            />
        )
    };*/

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>About:
                    {this.props.navigation.getParam('nome', 'Fulano')}
                    {this.state.contador}
                </Text>
                <View style={{ padding: 15 }}></View>
                <Button
                    title="Ir pro About... de novo?"
                    onPress={() => this.props.navigation.navigate('About')}
                />
                <View style={{ padding: 15 }}></View>
                <Button
                    title="Ir pro About... de novo!"
                    onPress={() => this.props.navigation.push('About')}
                />
                <View style={{ padding: 15 }}></View>
                <Button
                    title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}