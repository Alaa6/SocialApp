 /*___________________________import_________________________________________ */

import React ,{Component} from 'react';
import {Navigation} from 'react-native-navigation' ;
import MapView ,{Marker} from 'react-native-maps';
import {StyleSheet,View,Text,Picker ,Dimensions} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DisplayMap from '../screens/map'
 /*_____________________________registerComponent_____________________________ */

 Navigation.registerComponent('Guide.map' ,()=>DisplayMap);

const {width} =Dimensions.get('window');




class Countries  extends Component{

    state ={
        user :'' ,
        StateResult :[] ,
        selectedCountry :'الدولة' ,
      
      }

    updatedCountry =(result) =>{
        this.setState({selectedItem : result })    
       }

       componentWillMount(){
        this.getDataList();
     }

     getDataList (){
        var that = this;
        var url = `https://restcountries.eu/rest/v2/all` ;
        console.log("-----------url:"+url);

        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){
           that.setState({StateResult : result })
            console.log(result);
    
         })
         .catch(function(error){
             console.log("-------- error ------- "+error);
             alert('result :'+ error);
         });


    }

    countryList = () => {
      return( this.state.StateResult.map( (x,i) => { 
        return( <Picker.Item label={x.name} key={i} value={x.name}  />)} ));

    }

    MapIconClick(){
      Navigation.dismissAllModals();
      Navigation.showModal({
        stack :{
          children :[{
            component :{
              id : 'mapId' ,
              name : 'Guide.map'
            }

          }] ,
          options :{
            topBar :{
              title :{
                text :'الاقرب منك' ,
                color : 'rgba(0,128,0 ,0.7)' ,
                fontSize : 25 ,
                alignment :'center'

              } ,// end title 
              // leftButtons :[{
              //   id :'backBtn' ,
              //   icon :require('../images/arrowLeft.png'),
              //   color :'rgba(0,128,0 ,0.7)' ,
                
              // }]
             
            }
          }

        }
      });
      
    }

 

    

  render(){

    


     return (
       <View>
        <View  style={styles.Header}>
       

<Picker 
  selectedValue={this.state.selectedCountry}
 onValueChange={ (value) => ( this.setState({selectedCountry : value}) )} 
 style ={{color: 'rgba(0,128,0 ,0.7)' ,width :width/3 ,height :width/6 ,marginRight :40}} >
   

   {this.countryList()}
</Picker>


<Picker selectedValue={this.state.StateResult} 
onValueChange={this.updatedCountry}
 style ={{color: 'rgba(0,128,0 ,0.7)' ,width :width/3 ,height :width/6}} >
<Picker.Item label= {"المدينه"} value ={"المدينة"} />
  <Picker.Item label= {"القاهره الجديدة"} value ={"مصر"} />
  <Picker.Item label= {"كوريا"} value ={"كوريا"} />
  <Picker.Item label= {"الصين"} value ={"الصين"} />


</Picker>


<Icon2 
style ={styles.bellIconStyle}
name ='map-marker'
size ={30}
onPress ={this.MapIconClick}/>


</View>


      </View>
     );
   

   
  }

}

const styles = StyleSheet.create({
    Header :{
        // flex :1 ,
        flexDirection :'row-reverse' ,
        alignItems :'center' ,
        justifyContent :'center' ,
        marginTop : 10 ,
       
       
    } ,
    
    MultiSelectStyle :{
        flexDirection :'row-reverse' ,
       
        marginTop : 20 ,
       
    } ,
    titlePageStyle :{
        paddingLeft : 40 ,
        paddingRight : 40 ,
        fontSize : 30 ,
        color : 'rgba(0,128,0 ,0.7)' ,

    } ,
    menuIconStyle :{
        marginHorizontal :40 ,
        color : 'rgba(0,128,0 ,0.7)' ,

        

    } ,

    bellIconStyle :{
        marginHorizontal :40 ,
        color :'rgb(255,99,71) ',

    } ,
    MultiSelect_1_Style :{
       padding :20 ,
       width : 100 ,
        color :'rgb(255,99,71) ',

    } ,
    container: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    map: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
    },

  
 
});

export default Countries;
