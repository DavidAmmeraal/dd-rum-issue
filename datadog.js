import {
  DdSdkReactNativeConfiguration,
  SdkVerbosity,
} from '@datadog/mobile-react-native';
import Config from 'react-native-config';

export const datadogConfig = new DdSdkReactNativeConfiguration(
  Config.DD_CLIENT_TOKEN,
  Config.DD_RUM_APP_ENV,
  Config.DD_RUM_APP_ID,
  true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
  true, // track XHR Resources
  true, // track Errors
);
// Optional: Select your Datadog website (one of "US", "EU" or "GOV")
datadogConfig.site = 'EU';
// Optional: enable or disable native crash reports
datadogConfig.nativeCrashReportEnabled = true;
datadogConfig.verbosity = SdkVerbosity.DEBUG;
