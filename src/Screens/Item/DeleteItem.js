
import React, { Component } from 'react';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
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


class DeleteItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            new_photo: this.props.photo,
            Item_Name: this.props.item_name,
            Item_Price: this.props.item_price,
            Item_Id: this.props.item_id,
            AddPhoto: true

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

    DeleteItem = () => {
        var that = this;
        const { Item_Id } = this.state;
     

        realm.write(() => {
            var ID = Item_Id;
          
              realm.delete(
                realm.objects('user_details').filtered('user_id =' + ID)
              );
              var user_details = realm.objects('user_details');
              console.log(user_details);
              Alert.alert(
                'Success',
                'User deleted successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => that.props.navigation.navigate('HomeScreen'),
                  },
                ],
                { cancelable: false }
              );
           
          });
    };




    handleImagePicker = () => {
        const options = {  //options
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('resposns' + response);
            if (response.uri) {
                this.setState({ new_photo: response });
            }
        });

        this.setState({ AddPhoto: false })


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
        const { AddPhoto, new_photo } = this.state;
        const { item_id, item_name, price, photo, title } = this.props;
        return (
            <View style={styles.container}>
                <Header title='Update Item' />


                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center' }}>
                    {new_photo ?
                      <Image source={{ uri: new_photo }} style={{ width: 300, height: 300, alignSelf: 'center', marginTop: 20 }} />
                      :
                     <Image source={{ uri: photo }} style={{ width: 300, height: 300, alignSelf: 'center', marginTop: 20 }} />



                    }
                    {AddPhoto ? <View style={{
                        flexDirection: 'row',
                    }}>

                        <TouchableOpacity style={styles.ubloadPhoto} onPress={this.handleImagePicker} >
                            <Icon1
                                style={styles.menuIconStyle}
                                name='addfile'
                                size={100} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.ubloadPhoto} onPress={this.handleCameraPicker}  >
                            <MaterialIcon
                                style={styles.menuIconStyle}
                                name='add-a-photo'
                                size={100} />
                        </TouchableOpacity>
                    </View> : null}


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
s
                        //    />
                        //  }
                        value={this.state.Item_Name}
                       />
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
                        value={this.state.Item_Price}
                        //  leftIcon ={
                        //    <Icon1
                        //    name ='user'
                        //    size ={25}
                        //    color ='white'

                        //    />
                        //  }
                       
                         />


                    <MyButton title='Save' customClick={this.UbdateData} />

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

export default connect(mapStateToProps)(DeleteItem);


