import {AppRegistry} from 'react-native';
import {DdSdkReactNative} from '@datadog/mobile-react-native';
import App from './App';
import {name as appName} from './app.json';
import {datadogConfig} from './datadog';

DdSdkReactNative.initialize(datadogConfig);

AppRegistry.registerComponent(appName, () => App);
