import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//app
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';

//signin
import SignInScreen from './SignInScreen';

//loading automático de autorização
import AuthLoadingScreen from './AuthLoadingScreen'

const AppStack = createStackNavigator(
    { 
       Home: HomeScreen,
       Other: OtherScreen 
    }
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const SwitchNav = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );

export default createAppContainer(SwitchNav);