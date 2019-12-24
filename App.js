import React, { Component } from 'react';
//import HomeScreen from './app/screens/home'
import { Navigation } from 'react-native-navigation';


import { StyleSheet } from 'react-native';
import store from './src/Store';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { ReduxNetworkProvider } from 'react-native-offline';

import Home from './src/Screens/Home/Home'



const Props = {
  children: React.Node,
  // pingTimeout?: number = 10000,
  // pingServerUrl?: string = 'https://www.google.com/',
  // shouldPing?: boolean = true,
  // pingInterval?: number = 0,
  // pingOnlyIfOffline?: boolean = false,
  // pingInBackground?: boolean = false,
  // httpMethod?: HTTPMethod = 'HEAD',
}



class App extends Component {


  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }


  render() {

    return (
      <Provider store={store}>
        <ReduxNetworkProvider>
          <Home />
        </ReduxNetworkProvider>
      </Provider>


    );



  }

}

const styles = StyleSheet.create({

});

export default App;
