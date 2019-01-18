/** @format */

import {AppRegistry} from 'react-native';
// import navigation from './App/navigator/appNavigator';
import customer from './App/components/customer';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => navigation);
AppRegistry.registerComponent(appName, () => customer);
