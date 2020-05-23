import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Home!</Text>
            </View>
        );
    }
}
class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Settings!</Text>
            </View>
        );
    }
}
const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'yellow',
            labelStyle: {
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: "bold"
            },
        },
    }
);
export default createAppContainer(TabNavigator);