import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProdutoMenuScreen from './ProdutoMenuScreen';
import ProdutoAddScreen from './ProdutoAddScreen';
import ProdutoEditarScreen from './ProdutoEditarScreen';
import ProdutoListarScreen from './ProdutoListarScreen';
import ProdutoRecuperarScreen from './ProdutoRecuperarScreen';
import UploadImagemScreen from './UploadImagemScreen';
import ListarImagensScreen from './ListarImagensScreen';

import Questao01 from './questoes/Questao01';
import Questao02 from './questoes/Questao02';
import Questao03 from './questoes/Questao03';
import Questao04 from './questoes/Questao04';
import Questao05 from './questoes/Questao05';

const MainStack = createStackNavigator(
    {
        ProdutoMenuScreen,
        ProdutoAddScreen,
        ProdutoEditarScreen,
        ProdutoListarScreen,
        ProdutoRecuperarScreen,
        UploadImagemScreen,
        ListarImagensScreen,

        Questao01,
        Questao02,
        Questao03,
        Questao04,
        Questao05
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