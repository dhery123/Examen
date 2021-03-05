import React from 'react';
import{View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import VectorIcons from 'react-native-vector-icons/AntDesign';
import Color from '../layout/colors.js';
class CustomButtons extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title, iconname,onPress}=this.props;
        var icon = iconname;
        if(icon==null){
            icon='check';
        }
        return(
        <TouchableOpacity 
        style={styles.btnstyles}
        onPress={()=>{
            onPress();
        }}
        
        >
            <VectorIcons
            name="customerservice"
            size={24}
            color="#52c1de"
            />
            <Text style={styles.txt}>{title} </Text>
        </TouchableOpacity>
        );
    }
}
const styles= StyleSheet.create({
    btnstyles: {
        backgroundColor: "#e7ddff",
        flexDirection: 'row',
        padding: 20,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
      color: "#0d1117"
    },
    textinputcolor: {
        color: "#e4e0f0",
    },
});
export default CustomButtons;