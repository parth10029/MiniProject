/** @format */

import {AppRegistry} from 'react-native';
import navigation from './App/navigator/appNavigator';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => navigation);
