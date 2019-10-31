import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProdutoMenuScreen from './ProdutoMenuScreen';
import ProdutoAddScreen from './ProdutoAddScreen';
import ProdutoEditarScreen from './ProdutoEditarScreen';
import ProdutoListarScreen from './ProdutoListarScreen';

const MainStack = createStackNavigator(
    {
        ProdutoMenuScreen,
        ProdutoAddScreen,
        ProdutoEditarScreen,
        ProdutoListarScreen
    },
    {
        initialRouteName: 'ProdutoMenuScreen',
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