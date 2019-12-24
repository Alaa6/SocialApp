

import React ,{Component} from 'react';
//import HomeScreen from './app/screens/home'
import {Navigation} from 'react-native-navigation' ;
import { StyleSheet,View,Text,Dimensions ,} from 'react-native';
import { Input  ,CheckBox } from 'react-native-elements'
import   Icon3 from 'react-native-vector-icons/Feather';
import RestaurantScreen from '../screens/restaurants' ;
import Map from '../screens/map'





const {width} =Dimensions.get('window');

class Search  extends Component{
    constructor (){
        super();
        this.state ={
            searchTerm :''
        }
    }


    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

     
      

  render(){
     return (
       <View>
        <View style={styles.textInputStyle }>
        <Input
                    
                    name ='search'
                    placeholder ='ابحث... '
                    placeholderTextColor='gray'
                    
                   
                    inputStyle ={{
                      color:'black' ,
                      textAlign :'right'
                     }
                    }

                    inputContainerStyle ={
                     {borderBottomWidth :0}
                   }
                    
                    leftIcon ={
                     <Icon3
                     name ='search'
                     size ={25}
                     color ='gray'
                     
                     />
                    
                   }
                
                     />

                     

        </View>

 
       </View>
     );
   

   
  }

}

const styles = StyleSheet.create({

    textInputStyle :{

        width :  width/1.1 ,
        height : width/7 ,
        borderWidth :1.5 ,
        marginHorizontal :20 ,
        borderRadius :10 ,
        borderColor :'rgba(255,255,255 ,0.4)' ,
        fontSize :25 ,
        backgroundColor: 'rgba(0,0,128,0.1)' ,
       
    
      
      },
 
});

export default Search;
