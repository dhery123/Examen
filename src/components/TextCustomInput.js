import React, { Component } from 'react';
import{View,Text,StyleSheet,TouchableOpacity,TextInput,AppRegistry} from 'react-native';
import VectorIcons from 'react-native-vector-icons/AntDesign';

import Color from '../layout/colors.js';


class TextCustomInput extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {placeholder, iconname, keyboardType,onChangeText}=this.props;
        var key= keyboardType;
        if(key == null){
            key='default';
        }
        return(
            <View style={styles.inputtext}>
            <TextInput styles={styles.textinputcolor}/>
            <VectorIcons
            name={iconname}
            size={24}
            color= "#1151b1"
            />
            <TextInput style={styles.textinputcolor}
            placeholder={placeholder} 
            keyboardType={key}
            onChangeText={(text)=>{
                if(onChangeText!=null){
                onChangeText(text);}
            }}
            />
            
        </View>
        );    
}
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color[Color.key].mainColor,
        alignItems: 'center',
    },
    inputtext: {
        flexDirection: 'row',
        paddingLeft: 5,
        backgroundColor: Color[Color.key].secondColor,
        width: '90%',
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    textinputcolor: {
        height: '100%',
        color: Color[Color.key].fourthColor,
    }
});
export default TextCustomInput;