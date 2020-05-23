import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('./vilnei.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Text>{this.props.titulo}</Text>
            </View>
        )
    }
}