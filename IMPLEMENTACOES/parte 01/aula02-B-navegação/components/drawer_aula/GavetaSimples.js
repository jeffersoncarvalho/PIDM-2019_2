import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import styles from './Estilos';

class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./icon-chat.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>HOME SCREEN</Text>
                <Text
                    style={styles.paragraph}
                    onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}>
                    Toggle Drawer
                </Text>
            </View>
        )
    }
}

class Notification extends Component {
    static navigationOptions = {
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./icon-notify.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>NOTIFICATION SCREEN</Text>
            </View>
        )
    }
}

const GavetaNavigator = createDrawerNavigator({
    Home, Notification
})

export default createAppContainer(GavetaNavigator);