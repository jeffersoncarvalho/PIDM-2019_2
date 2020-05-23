import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home!</Text>
            </View>
        )
    }
}

class AboutScreen extends Component {
    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>About!</Text>
            </View>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: HomeScreen,
        About: AboutScreen
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'green',
            activeBackgroundColor: 'yellow',
            labelStyle: {
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: "bold"
            },
        }
    }
);

export default createAppContainer(TabNavigator);