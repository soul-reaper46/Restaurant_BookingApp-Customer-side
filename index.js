/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import participant from './participant';
import submitted from './submitted';
import Navigation from './navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
