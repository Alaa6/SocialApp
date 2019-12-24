
import React, { Component } from 'react';
//import LoginScreen from './app/screens/loginScreen'
import { Navigation } from 'react-native-navigation';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import store from '../Store';
import { Provider } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image
} from 'react-native';

import Home from '../Screens/Home/Home'
import AddItem from '../Screens/AddItem/AddItem'
import { ReduxNetworkProvider } from 'react-native-offline';




const { width } = Dimensions.get('window');

Navigation.registerComponent('Home', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <Home {...props} />
        </ReduxNetworkProvider>

    </Provider>
), () => Home);

Navigation.registerComponent('AddItem', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <AddItem {...props} />
        </ReduxNetworkProvider>
    </Provider>
), () => AddItem);





class SideMenu extends Component {

    // goToChat() {
    //     Navigation.dismissAllModals();
    //     Navigation.showModal({
    //         component: {
    //             //id: 'chatId',
    //             //name: 'Guide.chat'
    //         }
    //     });

    // }
    goToAddItem() {
        Navigation.dismissAllModals();
        Navigation.showModal({
            component: {
                id: 'addItemId',
                name: 'AddItem',
                passProps: {
                    title: 'Add Item'
                }
            }
        });
    }
    goToHome() {
        Navigation.dismissAllModals();
        Navigation.showModal({
            component: {
                id: 'homeId',
                name: 'Home',
                passProps: {
                    title: 'Home'
                }
            }
        });

    }

    goToFavorite() {
        Navigation.dismissAllModals();
        Navigation.showModal({
            component: {
                id: 'favId',
                name: 'Guide.fav'
            }
        });

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {/* <Image source ={require('../images/home.png') } style ={styles.imageHeader}/> */}

                    <Text style={styles.textHeader} >
                        alaa ashraf
                   </Text>
                </View>


                <View style={styles.MenuItems}>

                    <Icon1
                        style={styles.Icons}
                        name='home'
                        size={30}
                        color='green' />
                    <Text style={styles.ItemsText} onPress={this.goToHome}> Home</Text>

                </View>

                <View style={styles.MenuItems}>

                    <Icon2
                        style={styles.Icons}
                        name='chat'
                        size={30}
                        color='green' />
                    <Text style={styles.ItemsText} onPress={this.goToAddItem} > Add Item</Text>

                </View>

                {/* <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='favorite'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} onPress={this.goToFavorite}> المفضلة</Text>
              </View> */}
                {/* 
              <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='settings'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} > الاعدادات</Text>
              </View> */}

                {/* <View style={styles.MenuItems}>
                  <Icon2 
                  style ={styles.Icons}
                  name ='share'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.ItemsText} > مشاركة التطبيق</Text>
              </View> */}

                {/* <View style={styles.MenuItems}>
                  <Icon3 
                  style ={styles.logoutIcon}
                  name ='logout'
                  size = {30}
                  color ='green'/>
                  <Text style ={styles.logoutText} > تسجيل الخروج</Text>
              </View> */}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },

    header: {

        backgroundColor: 'green',
        height: width / 1.7,
        width: width,
        justifyContent: 'center', // vertical
        //alignContent : 'center' , // nothing
        // alignItems :'center' , //horizental


    },
    imageHeader: {
        width: width / 3,
        height: width / 3,
        marginLeft: width / 4,


    },
    textHeader: {
        fontSize: 25,
        color: 'white',
        marginRight: width / 6,
        textAlign: 'center',
        marginTop: 15,

    },
    MenuItems: {
        flexDirection: 'row',
        marginVertical: 10

    },
    Icons: {
        marginLeft: 20


    },
    ItemsText: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 25,
        //marginTop :3 ,
        marginRight: 4,
        textAlign: 'justify'


    },
    logoutIcon: {
        color: 'rgba(255,99,71 ,0.8) ',

        marginRight: 20,


    },
    logoutText: {
        color: 'rgba(255,99,71,0.7) ',
        fontSize: 25,
        marginRight: 4

    }


});

const mapStateToProps = (state) => { // l state eli fe l authReducer

    return {
        isConnected : state.network.isConnected
    }
}
export default connect(mapStateToProps)(SideMenu);



