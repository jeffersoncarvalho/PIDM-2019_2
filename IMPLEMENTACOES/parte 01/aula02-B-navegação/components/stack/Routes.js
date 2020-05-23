import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import Modal from './Modal';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainStack = createStackNavigator(
    {
        Home:HomeScreen,
        About:AboutScreen    
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)

const RootStack = createStackNavigator(
    {
        Main: MainStack,
        Modal: Modal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const Routes = createAppContainer(RootStack);

export default Routes;