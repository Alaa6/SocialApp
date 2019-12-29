
import React, { Component } from 'react';
import Icon3 from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    Alert,
    ScrollView,
    Dimensions
} from 'react-native';

//import HomeSideMenu from '../menu/HomeSideMenu'
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import Header from '../../Components/header/header';
import { connect } from 'react-redux';
import Realm from 'realm';
import Home from '../Home/Home'
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import { Input } from 'react-native-elements';
import store from '../../Store';
import MyButton from '../../Components/MyButton'




Navigation.registerComponent('Home', () => (props) => (
    <Provider store={store}>
        <ReduxNetworkProvider>
            <Home {...props} />
        </ReduxNetworkProvider>

    </Provider>
), () => Home);

let realm;
const { width } = Dimensions.get('window');


class AddItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photo: null,
            Item_Name: '',
            Item_Price: ''

        };

        realm = new Realm({ path: 'MenuDB2.realm' });
    }

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

    SaveData = () => {
        var that = this;
        const { photo } = this.state;
        const { Item_Name } = this.state;
        const { Item_Price } = this.state;

        if (photo) {
            if (Item_Name) {
                if (Item_Price) {
                    realm.write(() => {
                        var ID =
                            realm.objects('Item_Details').sorted('item_id', true).length > 0
                                ? realm.objects('Item_Details').sorted('item_id', true)[0]
                                    .item_id + 1
                                : 1;
                        realm.create('Item_Details', {
                            item_id: ID,
                            item_Name: Item_Name,
                            item_Image: photo.uri,
                            item_Price: Item_Price
                        });

                        Alert.alert(
                            'Success',
                            'Item is saved successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: this.pushHomeScreen,
                                },
                            ],
                            { cancelable: false }
                        );
                    });


                } else {
                    alert('Please enter item price');

                }

            } else {
                alert('Please enter item name');
            }
        } else {
            alert('Please Add item image');
        }
    };




    handleImagePicker = () => {
        const options = {  //options
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('resposns' + response);
            if (response.uri) {
                this.setState({ photo: response });
            }
        });


    };

    handleCameraPicker = () => {
        const options = {  //options
            noData: true,
        };

        ImagePicker.launchCamera(options, response => {
            if (response.uri) {
                JSON.stringify(response);
                this.setState({
                    photo: response,
                    fileData: response.data,
                    fileUri: response.uri
                });

            }

        });
    };






    render() {
        const { photo } = this.state;
        return (
            <View style={styles.container}>
                <Header title='Add Item' />

                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center' }}>
                    {photo ? <Image source={{ uri: photo.uri }} style={{ width: 300, height: 300, alignSelf: 'center' ,resizeMode:'stretch' }} />
                        : <Image source={require('../../assets/images/noImage.png')} style={{ width: 300, height: 300, alignSelf: 'center',resizeMode:'stretch' }} />
                    }

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-around'
                    }}>

                        <TouchableOpacity style={styles.ubloadPhoto} onPress={this.handleImagePicker} >
                          
                            <FontAwesome
                                style={styles.menuIconStyle}
                                name='photo'
                                color='primaryLight'
                                size={90} />

                        </TouchableOpacity>

                        <Text style={styles.text}>{'- OR - '}</Text>




                        <TouchableOpacity style={styles.ubloadPhoto} onPress={this.handleCameraPicker}  >
                            <MaterialIcon
                                style={styles.menuIconStyle}
                                name='add-a-photo'
                                size={100} />
                        </TouchableOpacity>
                    </View>


                    <Input
                        containerStyle={styles.textInputStyle}
                        placeholder='Please enter item name'
                        onChangeText={(Item_Name) => this.setState({ Item_Name })}
                        placeholderTextColor='white'
                        inputStyle={
                            { color: 'white' }
                        }
                        inputContainerStyle={
                            { borderBottomWidth: 0 }
                        }
                        //  leftIcon ={
                        //    <Icon1
                        //    name ='user'
                        //    size ={25}
                        //    color ='white'

                        //    />
                        //  }
                        name='userName' />

                    <Input
                        containerStyle={styles.textInputStyle}
                        placeholder='Please enter item price'
                        onChangeText={(Item_Price) => this.setState({ Item_Price })}
                        placeholderTextColor='white'
                        inputStyle={
                            { color: 'white' }
                        }
                        inputContainerStyle={
                            { borderBottomWidth: 0 }
                        }
                        //  leftIcon ={
                        //    <Icon1
                        //    name ='user'
                        //    size ={25}
                        //    color ='white'

                        //    />
                        //  }
                        name='userName' />


                    <MyButton title='Save' customClick={this.SaveData} />

                </ScrollView>

            </View>

        );



    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,


    },
    ubloadPhoto: {

    },

    text: {
        fontSize: 25,
        color: 'rgba(0,128,0 ,0.7)',
        marginTop: width / 5

    },
    titlePageStyle: {
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 30,
        color: 'rgba(0,128,0 ,0.7)',


    },
    menuIconStyle: {
        marginHorizontal: 40,
        color: 'gray',
        marginVertical: 40



    },

    bellIconStyle: {
        marginHorizontal: 40,
        color: 'rgb(255,99,71) ',

    },
    textInputStyle: {

        width: width / 1.1,
        height: width / 8,
        borderWidth: 1.5,
        marginHorizontal: 20,
        marginVertical: 7,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.35)',
        borderStyle: 'solid',
        fontSize: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',



    },



});



const mapStateToProps = state => ({
    isConnected: state.network.isConnected
})

export default connect(mapStateToProps)(AddItem);


