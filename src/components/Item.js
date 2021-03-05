import React from 'react';
import {View,Text,StyleSheet,Image,Button}from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
class Item extends React.Component{
    constructor(props){
        super(props);

    }
    onDelete(id){
        const{ondelete}=this.props;
        ondelete(id);
    }
    render(){
        return(
            <View style={style.containerlist}> 
             <View style={style.textstyle}> 
            <Text>{this.props.name}</Text>
            </View>
            <View>
            <Button
            tittle="Borrar"
            onPress={()=>{
                this.onDelete(this.props.id);
            }}
            />
        </View></View>
            );

    }
}
const styles = StyleSheet.create({
    containerlist:{
        flexDirection:'row',
        backgroundColor:'#fff',
        marginTop:5,
        padding:10,
        borderRadius:10,
        elevation:4,
    },
    textstyle:{
        justifyContent:'flex-start',
        width: '70%',
    },
});
export default Item;