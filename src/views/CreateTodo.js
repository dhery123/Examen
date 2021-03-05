import React from 'react';
import{View,Text,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import TextCustomInput from "../components/TextCustomInput.js";
import CustomButtons from "../components/CustomButtons.js";
import Request from '../server/Request.js';
import {CREATE_TODO, UPDATE,DELETE} from '../server/EndPoints.js';
import Color from '../layout/colors.js';
class Createtodo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            description: '',
            date: '',
            hour:'',
            done:'',
            
        };
    }
    componentDidMount(){

    }
    
        registerData(){
            console.log(this.state);
            var req = new Request('post', CREATE_TODO, this.state,(response)=>{
                if(response.status == 200){
                    alert('tarea registrada');
                    
                }
            });
        req.start();
        
 
        var req = new Request('put', UPDATE, this.state, (response) => {
            if (response.status == 200) {
                alert('Done actualizada');
            }
        });
        req.start();
        var req = new Request('delete', DELETE, this.state, (response) => {
            if (response.status == 200) {
                alert('Tarea eliminada');
            }
        });
        req.start();

        }
    


        
    render(){
        return(
            
        <View style={styles.container}>
             <Text  >{"\n"}REGISTRO DE TAREAS {"\n"}</Text>
            <TextCustomInput iconname= "rightcircleo" placeholder="Nombre de la tarea por hacer"
            onChangeText={(txt)=>{
                this.setState({
                    name: txt,
                });
            }}
            />
             
            <TextCustomInput iconname= "rightcircleo" placeholder="Descripcion de la tarea por hacer"
             onChangeText={(txt)=>{
                this.setState({
                    description: txt,
                });
            }}
            />
             
            <TextCustomInput iconname= "rightcircleo" placeholder="YYYY-MM-DD"
            keyboardType="numeric"
            onChangeText={(txt)=>{
                this.setState({
                    date: txt,
                });
            }}
            />
            <TextCustomInput iconname= "rightcircleo" placeholder="Hora"
            onChangeText={(txt)=>{
                this.setState({
                    hour: txt,
                });
            }}
            />
            
            <TextCustomInput iconname= "rightcircleo" placeholder="tarea cumplica/tarea incumplida "
            onChangeText={(txt)=>{
                this.setState({
                    done: txt,
                });
            }}
            />
            <Text>
{"\n"}


</Text>
            <CustomButtons 
                    title="Agregar Tarea" 
                    iconname="documents" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <Text>{"\n"}
</Text>
                <CustomButtons 
                    title="Borrar Tarea" 
                    iconname="trash" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                          <Text>{"\n"}
</Text>
                <CustomButtons 
                    title="Actualizar Tarea" 
                    iconname="back-in-time" 
                    
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                          <Text>{"\n"}
</Text>
                
               
        </View>
        );
    }}
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: "#6950aa",
            alignItems: 'center',
        },
    });

export default Createtodo;