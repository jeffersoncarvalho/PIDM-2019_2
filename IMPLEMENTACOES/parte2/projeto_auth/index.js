/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/MyApp';
import Routes from './src/components/Routes'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
