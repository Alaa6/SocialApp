
import React, { Component } from 'react';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
Navigation.registerComponent('Guide.menu', () => RestaurantScreen);
Navigation.registerComponent('Guide.header', () => Header);

Navigation.registerComponent('Guide.sidemenu', () => HomeSideMenu);



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



  render() {
    return (
      <View style={styles.Header}>



        <Icon2
          style={styles.bellIconStyle}
          name='bell'
          size={30} />
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
    justifyContent: 'center',
    marginTop: 10,


  },

  titlePageStyle: {
    paddingLeft: 40,
    paddingRight: 40,
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


