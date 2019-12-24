
import React ,{Component} from 'react';
import {Navigation} from 'react-native-navigation'
import App from './App';
import registerScreens from './src/Screens'
import SideMenu from './src/Components/SideMenu'
import {Provider} from 'react-redux';
import store from './src/Store';

console.disableYellowBox = true;


Navigation.registerComponent('Guide.App' ,()=>App);
//Navigation.registerComponent('SideMenu', ()=>SideMenu);
Navigation.registerComponent('SideMenu',() => (props) => (
  <Provider store={store}>
    <SideMenu {...props} />
  </Provider>
), () => SideMenu);


Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot ({
    root:{
      sideMenu :{
        // right:{
        //   component :{
        //     id : 'SideMenu' ,
        //     name :'SideMenu'
        //   }
        // } , // end right
        center :{
          stack :{
            children :[{
              component :{
                name : 'Guide.App'
              }
            }] ,
            options :{
              topBar :{
                visible :false ,
              }
            }
          }
        } //end center
        ,left :{
          component :{
            id : 'SideMenu' ,
            name :'SideMenu'
          }

        }
    
      } // end side menu

    }
  
});
    })



