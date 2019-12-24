
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
    TouchableOpacity
} from 'react-native';

//import HomeSideMenu from '../menu/HomeSideMenu'
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import Header from '../../Components/header/header';

import { connect } from 'react-redux';

class AddItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photo :null

        }
    }



    handleImagePicker = () => {
        const options = {  //options
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('resposns'+response);
            if (response.uri) {
                this.setState({ photo: response });
            }
        });

        Navigation.showModal({
            component: {
                id: 'homeId',
                name: 'Home',
                passProps :{
                    photo : this.state.photo
                }
            }

        })
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
                <View style={{height :'100%' ,width:'100%' , alignItems: 'center', flexDirection: 'row',
                        justifyContent: 'center' }}>

                <TouchableOpacity style={styles.ubloadPhoto} onPress={this.handleImagePicker} > 
                    <Icon1 
                    style={styles.menuIconStyle}
                    name='addfile'
                    size={100}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ubloadPhoto}  onPress={this.handleCameraPicker}  > 
                    <MaterialIcon 
                    style={styles.menuIconStyle}
                    name='add-a-photo'
                    size={100}/>
                </TouchableOpacity>

                </View>
            </View>

        );



    }

}

const styles = StyleSheet.create({

    container :{
        flex: 1,
       

    },
    ubloadPhoto:{
       
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
        marginVertical :40



    },

    bellIconStyle: {
        marginHorizontal: 40,
        color: 'rgb(255,99,71) ',

    },



});



const mapStateToProps = state => ({
   isConnected : state.network.isConnected
})

export default connect(mapStateToProps)(AddItem);


