
import React from 'react';
import { TouchableOpacity, Text, StyleSheet ,Dimensions} from 'react-native';


const {width} = Dimensions.get('window');

const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,128,0 ,0.7)',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius :10 ,
    width: width/1.1,
    height: width/8,
    alignSelf :'center' ,
    
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;