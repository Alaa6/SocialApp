import React from 'react';
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Realm from 'realm';
import Swipeout from 'react-native-swipeout';
import UpdateItem from '../Item/UpdateItem'
import { Navigation } from 'react-native-navigation';
import { ReduxNetworkProvider } from 'react-native-offline';
import store from '../../Store';
import { Provider } from 'react-redux';
import Home from '../Home/Home'
import ItemDetails from '../Item/ItemDetails'

let realm;

Navigation.registerComponent('UpdateItem', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <UpdateItem {...props} />
        </ReduxNetworkProvider>
    </Provider>
), () => UpdateItem);

Navigation.registerComponent('Home', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <Home {...props} />
        </ReduxNetworkProvider>
    </Provider>
), () => Home);

Navigation.registerComponent('ItemDetails', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <ItemDetails {...props} />
        </ReduxNetworkProvider>
    </Provider>
), () => ItemDetails);


export default class ViewAllMenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],

        };
        realm = new Realm({ path: 'MenuDB2.realm' });

        var Item_details = realm.objects('Item_Details');

        this.state = {
            FlatListItems: Item_details,
            id: Item_details.item_id ,
            name : Item_details.item_Name,
            Image : Item_details.item_Image,
            Price : Item_details.item_Price,


        };
    }
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#eeeeee' }} />
        );
    };

    pushHomeScreen = () => {
        Navigation.showModal({
            component: {
                id: 'homeId',
                name: 'Home',
                passProps: {
                    photo: this.state.photo
                }
            }

        })
    }

    goToItemDetails =()=>{
        Navigation.showModal({
            component: {
                id: 'ItemDetailsId',
                name: 'ItemDetails',
                passProps: {
                    photo: item.item_Image,
                    item_name: item.item_Name,
                    item_price: item.item_Price,
                    item_id: item.item_id
                }
            }

        })
   

    }






    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                            <Swipeout right={[
                                {
                                    text: 'Edit',
                                    backgroundColor: 'rgb(0,128,0)',
                                    onPress: () => {
                                        Navigation.dismissAllModals();
                                        Navigation.showModal({
                                            component: {
                                                id: 'ubdateItemId',
                                                name: 'UpdateItem',
                                                passProps: {
                                                    photo: item.item_Image,
                                                    item_name: item.item_Name,
                                                    item_price: item.item_Price,
                                                    item_id: item.item_id
                                                }
                                            }
                                        });
                                    }
                                },
                                {
                                    text: 'Delete',
                                    backgroundColor: 'rgb(217, 80, 64)',
                                    onPress: () => {

                                        
                                            Alert.alert(
                                                          'Delete',
                                                          'Do you sure to delete this item ?',
                                                          [
                                                              {
                                                                  text: 'No', onPress: () => { },//Do nothing
                                                                  style: 'cancel'
                                                              },
                                                              {
                                                                  text: 'Yes', onPress: () => {
                                                                    realm.write(() => {
                                            
                                                                        console.log(item.item_id);
                                                                        var Item_Details = realm.objects('Item_Details');
                                                                        console.log(Item_Details);
                                                                        realm.delete(
                                                                            realm.objects('Item_Details').filtered('item_id =' + item.item_id)
                                                                        );
                                                                        var Item_Details = realm.objects('Item_Details');
                                                                        console.log(Item_Details); 
                                                                       
                                                                    });
                                                                    Alert.alert(
                                                                                  'Delete',
                                                                                  'this Item is deleted successfully !',
                                                                                  [
                                                                                      
                                                                                      {
                                                                                          text: 'Ok', onPress: this.pushHomeScreen
                                                                        
                                                                        
                                                                                      },
                                                                                  ],
                                                                                  { cancelable: true }
                                                                              );
                                                                    
                                                
                                                                  }
                                                              },
                                                          ],
                                                          { cancelable: true }
                                                      );

                                                     
                                        
                                    }
                                }
                            ]} autoClose={true}>

                                <TouchableOpacity onPress = {()=>{
                                     Navigation.showModal({
                                        component: {
                                            id: 'ItemDetailsId',
                                            name: 'ItemDetails',
                                            passProps: {
                                                photo: item.item_Image,
                                                item_name: item.item_Name,
                                                item_price: item.item_Price,
                                                item_id: item.item_id
                                            }
                                        }
                            
                                    })
                                }} >
                                    <View style={{ backgroundColor: '#ebf7df', }}>
                                        <Image source={{ uri: item.item_Image }} style={{ width: 300, height: 300, alignSelf: 'center', marginTop: 5,resizeMode:'stretch' }} />

                                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 10 }}>Name: {item.item_Name}</Text>
                                        <Text style={{ fontSize: 18, margin: 10 }} numberOfLines={2}>Price: {item.item_Price}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Swipeout >

                        </View>
                    )}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor :'white'



    },


});