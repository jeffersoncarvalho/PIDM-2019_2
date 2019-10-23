import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginForm from './LoginForm';
import Logout from './Logout';
import InitApp from '../App';

//pilha de conteúdo, teríamos outras páginas aqui acessíveis apenas a partir do login.
const ContentStack = createStackNavigator(
    { 
       Logout: Logout
    }
);
//pilha de login e cadastro. Não há necessidade de login para acessar essa página.
const LoginStack = createStackNavigator(
    { 
        LoginForm: LoginForm 
    }
);

const SwitchNav = createSwitchNavigator(
    {
      InitApp: InitApp, //padrão. App.js é a página que irá testar se o usário está logado e fara o redirecionamento.
      ContentStack: ContentStack, //pilha de conteúdo.
      LoginStack: LoginStack, //pilha de login.
    },
    {
      initialRouteName: 'InitApp', // tornando o App.js padrão.
    }
  );

export default createAppContainer(SwitchNav);