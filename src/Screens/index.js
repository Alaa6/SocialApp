import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { MenuProvider } from 'react-native-popup-menu';
import {View} from 'react-native'
import Home from './Home/Home'
import SideMenu from '../Components/SideMenu'
import store from '../Store';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

export default function () {

    const createScene = (InternalComponent, name = '') => () =>
        gestureHandlerRootHOC(
            class SceneWrapper extends Component {
                render() {
                    return (
                        <Provider store={store}>
                            <MenuProvider>
                                <SafeAreaView style={{ backgroundColor: '#FBB03B', flex: 1 }}>
                                    <View style={{ backgroundColor: 'white', flex: 1 }}>
                                        <InternalComponent {...this.props} />
                                    </View>
                                </SafeAreaView>
                            </MenuProvider>
                        </Provider>
                    );
                }
            },
        );

     Navigation.registerComponent('SideMenu', createScene(SideMenu, 'SideMenu'));
       Navigation.registerComponent('Home', createScene(Home));

   
    









}  