
import React ,{Component} from 'react';
import   Icon3 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import AllMenuItems from '../AllMenuItems/AllMenuItems' ;

//import HomeSideMenu from '../menu/HomeSideMenu'
import {Navigation} from 'react-native-navigation' ;
import Header from '../../Components/header/header';
//import { FlatList } from 'react-native-gesture-handler';
//import realm from '../../../Database/allSchemas';
import Swipeout from 'react-native-swipeout';
import Realm from 'realm';





// let FlatListItem = props => {
//   const { itemIndex, id, name, creationDate, popupDialogComponent, onPressItem } = props;
//   showEditModal = () => {

//   }
//   showDeleteConfirmation = () => {
//       Alert.alert(
//           'Delete',
//           'Delete a todoList',
//           [
//               {
//                   text: 'No', onPress: () => { },//Do nothing
//                   style: 'cancel'
//               },
//               {
//                   text: 'Yes', onPress: () => {

//                   }
//               },
//           ],
//           { cancelable: true }
//       );
//   };
//   return (
//       <Swipeout right={[
//           {
//               text: 'Edit',
//               backgroundColor: 'rgb(81,134,237)',
//               onPress: showEditModal
//           },
//           {
//               text: 'Delete',
//               backgroundColor: 'rgb(217, 80, 64)',
//               onPress: showDeleteConfirmation
//           }
//       ]} autoClose={true}>

//           <TouchableOpacity onPress={onPressItem}>
//               <View style={{ backgroundColor: itemIndex % 2 == 0 ? 'powderblue' : 'skyblue' }}>
//                   <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 10 }}>{name}</Text>
//                   <Text style={{ fontSize: 18, margin: 10 }} numberOfLines={2}>{creationDate.toLocaleString()}</Text>
//               </View>
//           </TouchableOpacity>
//       </Swipeout >
//   );
//     }


let realm;

class Home  extends Component{

  constructor(props) {
    super(props);

    realm = new Realm({
      path: 'MenuDB2.realm',
      schema: [
        {
          name: 'Item_Details',
          properties: {
            item_id: { type: 'int', default: 0 },
            item_Name :{type : 'string' ,indexed:true ,default :false},
            item_Price :{type : 'string' ,indexed:true ,default :false},
            item_Image:'string'
          },
        },
      ],
     
    });
    //this.reloadData();
    // realm.addListener('change', () => {
    //     this.reloadData();
    // });
}

// reloadData = () => {
//   queryAllTodoLists().then((itemList) => {
//       this.setState({ itemList });
//   }).catch((error) => {
//       this.setState({ itemList: [] });
//   });
//   console.log(`reloadData`);
// }
 
  render(){
   // const { photo } = this.props;
   //console.log('3aaaaaaaaaaaaaaaaaaaaa'+photo);
    
     return (
        <View style ={styles.container}>
          <Header title='Home'/>

          <AllMenuItems/>
     
          {/* <FlatList
       
          style ={styles.ItemListStyle}
          data ={this.state.itemList}
         // renderItem={({ item, index }) => <FlatListItem {...item} itemIndex={index} 
         // popupDialogComponent={this.refs.popupDialogComponent}
        //   onPressItem={() => {
        //       alert(`You pressed item `);
        //   }} />}
           
          /> */}


          
       </View>

     );
   

   
  }

}

const styles = StyleSheet.create({

    container :{
        flex :1 ,
        flexDirection :'column' ,
        justifyContent :'flex-start' ,
       
       
       
    } ,
    
    ItemListStyle :{
      flex :1 ,
      justifyContent :'flex-start' ,
     
     
     
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


 
});

export default Home;


