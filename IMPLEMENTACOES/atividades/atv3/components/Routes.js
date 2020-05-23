import Home from './Home';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Sobre from './Sobre'
import Perfil from './Perfil'
import Resultado from './Resultado';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainStack = createStackNavigator(
    {
        Home,
        Cadastro,
        IMC,
        Sobre,
        Perfil
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
        ResultadoModal: Resultado
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const Routes = createAppContainer(RootStack);

export default Routes;