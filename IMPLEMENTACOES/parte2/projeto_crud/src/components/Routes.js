import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LivroMenuScreen from './LivroMenuScreen';
import LivroAddScreen from './LivroAddScreen';
import LivroDetalheScreen from './LivroDetalheScreen';
import LivroEditarScreen from './LivroEditarScreen';
import LivroListarScreen from './LivroListarScreen';
import LivroRecuperarScreen from './LivroRecuperarScreen';

const MainStack = createStackNavigator(
    {
        LivroMenuScreen,
        LivroDetalheScreen,
        LivroAddScreen,
        LivroEditarScreen,
        LivroListarScreen,
        LivroRecuperarScreen
    },
    {
        initialRouteName: 'LivroMenuScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2c2c2c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)

const Routes = createAppContainer(MainStack);

export default Routes;