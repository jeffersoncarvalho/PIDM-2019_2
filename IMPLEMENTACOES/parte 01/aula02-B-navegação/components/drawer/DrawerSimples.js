import React from 'react';
import { View, Text, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import styles from './Estilos'

class MyHomeScreen extends React.Component {
    
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

                <Text style={styles.title}> HOME SCREEN </Text>

                <Text
                    style={styles.paragraph}
                    onPress={() => {
                        this.props.navigation.navigate('Notifications');
                    }}>
                    Go to Notifications
                </Text>

                <Text
                    style={styles.paragraph}
                    onPress={() => {
                        this.props.navigation.toggleDrawer();
                    }}>
                    Toggle Drawer
                </Text>
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
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
                <Text style={styles.title}> NOTIFICATIONS SCREEN </Text>
                <Text
                    style={styles.paragraph}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>
                    Go back home
                </Text>
            </View>
        );
    }
}

const MyDrawerNavigator = createDrawerNavigator({
    Home:MyHomeScreen,
    Notifications: MyNotificationsScreen
});

export default createAppContainer(MyDrawerNavigator);