
import React, { Component } from 'react';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import { Navigation } from 'react-native-navigation';
Navigation.registerComponent('Guide.menu', () => RestaurantScreen);
Navigation.registerComponent('Guide.header', () => Header);
Navigation.registerComponent('Guide.sidemenu', () => HomeSideMenu);



const {width} = Dimensions.get('window');
class Header extends Component {





  MenuBtnOnClick() {
    Navigation.dismissAllModals();
    Navigation.mergeOptions('SideMenu', {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  back() {
    Navigation.dismissAllModals();
   
  }



  render() {
    return (
      <View style={styles.Header}>



        <Ant
          style={styles.bellIconStyle}
          name='arrowright'
          size={25} 
          onPress={this.back}/>
        <Text style={styles.titlePageStyle}> {this.props.title}</Text>
        <Icon3
          style={styles.menuIconStyle}
          name='menu'
          size={30}
          onPress={this.MenuBtnOnClick}
        />

      </View>

    );



  }

}

const styles = StyleSheet.create({

  Header: {
    // flex :1 ,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    height :width/4.5



  },

  titlePageStyle: {
   
    
    fontSize: 23,
    color: 'rgba(0,128,0 ,0.7)',

  },
  menuIconStyle: {
    marginHorizontal: 40,
    color: 'rgba(0,128,0 ,0.7)',



  },

  bellIconStyle: {
    marginHorizontal: 40,
    color: 'rgb(255,99,71) ',

  },



});

export default Header;


