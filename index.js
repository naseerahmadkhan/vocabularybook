/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { MD3LightTheme as DefaultTheme,PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';


export default function Main() {

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#184D47',
          secondary: 'yellow',
        },
      };

    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }


AppRegistry.registerComponent(appName, () => Main);
