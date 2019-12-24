1
import { Realm } from 'realm';


export const ITEM_SCHEMA = 'Item';

export const MenuItemSchema={
    name : ITEM_SCHEMA,
    primaryKey: 'id' ,
    properties:{
        id :'int',
        name :{type : 'string' ,indexed:true ,default :false},
        image:'string'
    }
    
};

const databaseObtions ={
    path :'itemsList.realm',
    schema :[MenuItemSchema],
    schemaVersion :0 //optional
};

export const InsertNewItemIntoMenu= newItem => new Promise((resolve , reject)=> {
    Realm.open({schema :[MenuItemSchema]})
    .then(realm => {
        realm.write( () => {
            realm.create(ITEM_SCHEMA ,newItem);
            resolve(newItem)
            realm.close();

        })

    }).catch((error)=>reject(error));

});



// Realm.open({schema: [CarSchema, PersonSchema]})
  //.then(realm => {
    // Create Realm objects and write to local storage
   // realm.write(() => {
    //   const myCar = realm.create('Car', {
    //     make: 'Honda',
    //     model: 'Civic',
    //     miles: 1000,
    //   });
    //   myCar.miles += 20; // Update a property value
    // });

export const GetAllItemInMenu= () => new Promise((resolve , reject)=> {
    Realm.open(databaseObtions).then(realm =>{
        let allItems =realm.objects(ITEM_SCHEMA);
        resolve(allItems)
        realm.close();


    }).catch((error)=>reject(error));

});

//const RealmDB = new Realm({schema :[MenuItemSchema]}); // the error

//export default  RealmDB

