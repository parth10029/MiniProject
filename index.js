/** @format */

import {AppRegistry} from 'react-native';
// import navigation from './App/navigator/appNavigator';
import config from './App/config';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => navigation);
AppRegistry.registerComponent(appName, () => config);
