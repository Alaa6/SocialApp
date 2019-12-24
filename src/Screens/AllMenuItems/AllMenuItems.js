import React from 'react';
import { FlatList, Text, View ,Image ,StyleSheet} from 'react-native';
import Realm from 'realm';
let realm;

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
        };
    }
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'white', padding: 20 }}>
                            <Image source={{ uri: item.item_Image }} style={{ width: 300, height: 300, alignSelf: 'center' }} />
                    
                            <Text>Name: {item.item_Name}</Text>
                            <Text>Price: {item.item_Price}</Text>
                           

                        </View>
                    )}
                />
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
    
 
});