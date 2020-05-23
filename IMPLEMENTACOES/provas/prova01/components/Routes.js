import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import LoginErroScreen from './LoginErroScreen' //MODAL

import AlbumScreen from './album/AlbumScreen';
import CadastroScreen from './cadastro/CadastroScreen';
import PerfilScreen from './cadastro/PerfilScreen';
import HoroscopoScreen from './horoscopo/HoroscopoScreen';
import ResultadoHoroscopoScreen from './horoscopo/ResultadoHoroscopoScreen'; //MODAL
import IMCScreen from './imc/IMCScreen';
import ResultadoIMCScreen from './imc/ResultadoIMCScreen'; //MODAL

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainStack = createStackNavigator(
    {
        LoginScreen,
        MenuScreen,
        AlbumScreen,
        CadastroScreen,
        PerfilScreen,
        HoroscopoScreen,
        IMCScreen
    },
    {
        initialRouteName: 'LoginScreen',
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
        LoginErroScreenModal: LoginErroScreen,
        ResultadoHoroscopoScreenModal: ResultadoHoroscopoScreen,
        ResultadoIMCScreenModal: ResultadoIMCScreen,

    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const Routes = createAppContainer(RootStack);

export default Routes;